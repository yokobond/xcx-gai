import {
    ensureSkillsList,
    discoverSkills,
    buildSkillsPrompt,
    loadSkillBody,
    composeSkillsPrompt
} from '../../src/vm/extensions/block/skill-store.js';

const GREETING_SKILL = [
    '---',
    'name: greeting',
    'description: Use when the user greets the agent',
    '---',
    'Reply with an enthusiastic greeting and ask how you can help.'
].join('\n');

const QUIZ_SKILL = [
    '---',
    'name: "quiz-master"',
    'description: Use when the user wants a quiz',
    '---',
    'Ask one multiple-choice question at a time.'
].join('\n');

/**
 * Build a fake target whose `skills` list holds the given raw documents.
 * @param {Array.<string>} values - raw skill documents
 * @returns {object} a minimal Target-like object
 */
const fakeTarget = function (values) {
    const list = values === null ? null : {value: values};
    return {
        runtime: {
            emitProjectChanged: jest.fn(),
            requestBlocksUpdate: jest.fn()
        },
        _list: list,
        lookupVariableByNameAndType (name, type) {
            return name === 'skills' && type === 'list' ? this._list : null;
        },
        lookupOrCreateList (id, name) {
            this._list = {id, name, value: []};
            return this._list;
        }
    };
};

describe('skill-store', () => {
    describe('ensureSkillsList', () => {
        test('creates the skills list when missing', () => {
            const target = fakeTarget(null);
            const list = ensureSkillsList(target);
            expect(list).toBeTruthy();
            expect(list.name).toBe('skills');
            expect(target._list).toBe(list);
        });

        test('returns the existing list without recreating it', () => {
            const target = fakeTarget([GREETING_SKILL]);
            const existing = target._list;
            expect(ensureSkillsList(target)).toBe(existing);
        });

        test('requests a palette refresh only when the list is newly created', () => {
            const created = fakeTarget(null);
            ensureSkillsList(created);
            expect(created.runtime.requestBlocksUpdate).toHaveBeenCalledTimes(1);

            const existing = fakeTarget([GREETING_SKILL]);
            ensureSkillsList(existing);
            expect(existing.runtime.requestBlocksUpdate).not.toHaveBeenCalled();
        });
    });

    describe('discoverSkills', () => {
        test('parses name, description and body from frontmatter', () => {
            const skills = discoverSkills(fakeTarget([GREETING_SKILL, QUIZ_SKILL]));
            expect(skills).toHaveLength(2);
            expect(skills[0]).toEqual({
                name: 'greeting',
                description: 'Use when the user greets the agent',
                body: 'Reply with an enthusiastic greeting and ask how you can help.'
            });
            // quoted frontmatter values are unquoted
            expect(skills[1].name).toBe('quiz-master');
        });

        test('skips empty list items', () => {
            const skills = discoverSkills(fakeTarget([GREETING_SKILL, '   ', '']));
            expect(skills).toHaveLength(1);
        });

        test('returns [] when there is no skills list', () => {
            expect(discoverSkills(fakeTarget(null))).toEqual([]);
        });

        test('falls back to a generated name and first line when frontmatter is absent', () => {
            const skills = discoverSkills(fakeTarget(['Just plain instructions.\nmore']));
            expect(skills[0].name).toBe('skill-1');
            expect(skills[0].description).toBe('Just plain instructions.');
            expect(skills[0].body).toBe('Just plain instructions.\nmore');
        });
    });

    describe('buildSkillsPrompt (progressive disclosure)', () => {
        test('lists names and descriptions but not bodies', () => {
            const prompt = buildSkillsPrompt(fakeTarget([GREETING_SKILL, QUIZ_SKILL]));
            expect(prompt).toContain('loadSkill');
            expect(prompt).toContain('name: greeting');
            expect(prompt).toContain('description: Use when the user greets the agent');
            expect(prompt).toContain('name: quiz-master');
            // the body must NOT be inlined
            expect(prompt).not.toContain('Reply with an enthusiastic greeting');
        });

        test('returns \'\' when there are no skills', () => {
            expect(buildSkillsPrompt(fakeTarget([]))).toBe('');
        });
    });

    describe('loadSkillBody', () => {
        test('returns the body for a matching name (case-insensitive)', () => {
            const target = fakeTarget([GREETING_SKILL, QUIZ_SKILL]);
            expect(loadSkillBody(target, 'greeting')).toBe(
                'Reply with an enthusiastic greeting and ask how you can help.'
            );
            expect(loadSkillBody(target, 'QUIZ-MASTER')).toBe(
                'Ask one multiple-choice question at a time.'
            );
        });

        test('returns null when no skill matches', () => {
            expect(loadSkillBody(fakeTarget([GREETING_SKILL]), 'missing')).toBeNull();
        });
    });

    describe('composeSkillsPrompt (full-inline fallback)', () => {
        test('inlines the full body of every skill', () => {
            const prompt = composeSkillsPrompt(fakeTarget([GREETING_SKILL]));
            expect(prompt).toContain('greeting');
            expect(prompt).toContain('Reply with an enthusiastic greeting and ask how you can help.');
        });
    });
});
