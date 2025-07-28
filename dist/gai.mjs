var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAF0CAYAAAD/4EcMAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3XucjnXi//H3PXNLmBkzI+NUO1lyyjHkGBnnw4TQQSTnbFtEpdO33bTbYZGoJBQyZAalHoaMERmKtQ6RTKZCDiFyGMPgnnt+f+xv2/XIYQ6f+/7c9zWv558z91zXex9tPV6P677u63ZVrFjxrKRiAgAAgAkX3fp3XLltLwEAAHCKENsDAAAAnIbAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAgAAMIzAAvLp+uuvV2hoqO0ZAIAARmAB+ZSdna3u3bsrPDzc9hQAQIAisIACSElJ0SuvvKJy5crZngIACEAEFlAAZ86c0bRp0/TJJ5+oQYMGtucAAAJMaHh4+AsitIB8O3r0qNxut6ZMmaL9+/dr165dticBflGyZEldvHjR9gwgkHkJLKAQtmzZombNmunhhx9WZGSk1q5dq9zcXNuzAJ8IDw9X//79tXXrVnm9XttzgEDmJayAQvB6vRo5cqROnDihwYMHa9asWdz8Dkdq0KCB5s+fr+TkZK5eAXlAYAGFdPjwYT311FOSpLZt2+rTTz/VzTffbHcUYIjb7dbo0aP18ccf67XXXtPhw4dtTwKCAoEFGLBs2TLNnz9fklStWjV99tln6tq1q+VVQOHcdNNNSkpK0pgxYzR16lStW7fO9iQgaLgqVqx4UZLb9hAg2JUsWVIpKSmqXLmyJCk3N1dvv/22xo8fL4/HY3kdkD/333+/XnzxRZUqVUr//Oc/1adPH/5/DOSdh8ACDGrYsKE+/vjjS570vmHDBo0YMUJHjx61uAzIm+joaI0fP16dOnWSJJ06dUodOnTQgQMHLC8DgoqHtwgBgzZv3qzZs2df8rOmTZtqxYoVatq0qZ1RQB7FxcVp1apVv8VVbm6uRo0aRVwBBUBgAYa98sor2rt37yU/i4mJUWJiosaMGaOQEP61Q2CJiIjQa6+9pg8++EAxMTG//XzmzJlKSUmxuAwIXrxFCPhAs2bNtHDhQrlcrt/9buXKlRo5cqROnTplYRlwqfbt2+vVV19V+fLlL/n59u3b1b17d124cMHSMiCo8RYh4AtfffWVEhISLvu79u3ba/ny5br11lv9vAr4r7Jly2r69OmaPXv27+LqzJkzGjFiBHEFFAKBBfjI3//+dx08ePCyv4uNjdWnn36qvn37+nkVIPXu3Vtr1qy54qNEXnjhhd+9zQ0gf3iLEPChli1basGCBZd9q/A/li1bpieffFInT5704zIURTExMXr11VfVsWPHK75mxYoVGjRokB9XAY7k4bsIAR/66aefdOONN6p27dpXfM0tt9yinj17aseOHXxaCz7hcrnUr18/zZo1S7Vq1bri644fP67+/fvr7NmzflwHOJKXK1iAj0VERGjNmjUqV67cVV+Xk5OjyZMna/LkyTzQEcbcfPPNmjBhgpo1a3bN1w4YMECpqal+WAU4Hje5A752+vRpPfnkk9d8XWhoqEaPHq1PPvlEsbGxflgGJ3O73RoyZIhWrlyZp7iaO3cucQUYxFuEgB/s2bNHNWrUULVq1a752vLly+uee+7RyZMntX37dj+sg9M0b95cc+bMUa9evVSsWLFrvn7fvn0aOnQonxoEzOEtQsBfYmJitHbtWoWHh+f5b1avXq0xY8boyJEjPlwGp4iJidFzzz2n3r175/lvvF6vevfurY0bN/pwGVDk8BYh4C9Hjx7VxIkT8/U3bdq0UWpqqrp16+ajVXACt9utoUOHau3atfmKK0l66623iCvAB7iCBfiR2+3WsmXLCvSQ0aVLl+rpp5/WiRMnfLAMwap58+YaN26catasme+/3bFjh+Lj43Xx4kUfLAOKNK5gAf7k8Xj0zDPPyOv15vtvu3XrplWrVqldu3Y+WIZgExsbq5kzZ2rhwoUFiqvs7Gw9+uijxBXgIwQW4GebN2/WggULCvS35cqV05w5c/TOO++obNmyhpchGJQqVUrPPPOM1qxZo86dOxf4OC+//LIyMjIMLgPwv3iLELAgKipK69atU2RkZIGPcfLkSb344otauHChcnNzDa5DIHK5XOrdu7eeffZZxcTEFOpYGzZsUJ8+fQp0JRVAnvAkd8CG7OxsZWdnKy4ursDHuP7669WpUyc1btxYmzZt0qlTpwwuRCBp2bKlpk2bpoceekilSpUq1LHOnTun/v37cy8f4Ftewgqw5IMPPtDu3bsLfZw77rhDq1at0sMPPyy3m4vRTlK7dm3NmzdPiYmJqlevnpFjjh8/Xnv27DFyLABXxluEgEUtW7ZUYmKiseN9//33+r//+z+tXbvW2DHhf5UqVdJjjz2m+++/X6GhocaOu3XrVnXv3l05OTnGjgngsjwEFmDZ7Nmz1b59e6PHTE1N1bPPPquDBw8aPS58KyoqSiNGjNDQoUN13XXXGT32hQsX1KlTJ3333XdGjwvgsggswLbKlStr9erVefpKk/zIysrSG2+8oRkzZvBR/ABXunRpDRs2TEOGDFFYWJhPzvHaa69pypQpPjk2gN/hJnfAtpMnTyo8PFyNGjUyetzrrrtOrVq1Unx8vPbs2aO9e/caPT4KLzIyUo899pimTp2q1q1bG79q9R87d+7UqFGj+NQg4D98FyEQCCIiIvTll18qKirKZ+dISUnh2UcBIioqSsOGDdOgQYN8dsXqP3JycnTXXXdp27ZtPj0PgEtwBQsIBOfPn1dOTo5at27ts3NUqVJFDz74oGrUqKGvv/5ap0+f9tm5cHlRUVF65JFHNHXqVLVq1cpnV6z+1+zZs/Xhhx/6/DwALsEVLCBQFC9eXGlpaapUqZLPz5Wdna33339fb731Fs/P8oNKlSpp8ODB6tevX6GfY5UfR44cUevWrZWZmem3cwKQxBUsIHDk5OTo9OnT6tixo8/P5Xa71bhxY/Xr10/Sv7/01+Px+Py8RU3t2rX13HPPafz48br99tv9csXqf40ePVrffPONX88JQBJXsIDAEhoaqpUrV6p69ep+Pe+hQ4c0ZcoUJSYm6sKFC349t9OEhISoQ4cOGjZsmJo0aWJtx6pVq/Tggw9aOz9QxPGYBiDQdOjQQbNmzbJy7mPHjumDDz7QjBkzuEcrn4oXL674+Hg9+uijqlq1qtUt586dU1xcnH766SerO4AijMACAtGSJUvUuHFja+c/efKk3n//fb3//vt8Z9011KxZU3379lWvXr1UunRp23MkSX/729/0zjvv2J4BFGUEFhCImjZtqsWLF9ueoaysLCUkJOjdd9/VkSNHbM8JGGFhYerRo4fuv/9+1a9f3/acS+zevVvt27fnnjrALgILCFSLFi1Ss2bNbM+Q9O+vWVm6dKnmzZunDRs22J5jTcOGDdW3b1/Fx8f79dOA+XHfffcpLS3N9gygqCOwgEDVokULJSUl2Z7xOxkZGUpISNDChQuLxCMeYmNj1aVLF/Xp08fvHz7Ir+TkZA0bNsz2DAAEFhDYPv74Y91+++22Z1zWhQsXlJKSooSEBMddMYmNjVX79u3VrVs3NWrUSC6Xy/aka8rOztadd96p/fv3254CgMACAtudd96pefPm2Z5xTenp6VqyZIk+/fRT7du3z/acArn11lvVpUsXdenSRdWqVbM9J98mTJigSZMm2Z4B4N8ILCDQJScnB9yN1Fezbds2LV26VCkpKfrhhx9sz7mi8PBwNWvWTK1atVJcXJxiY2NtTyqwffv2qU2bNjp//rztKQD+jcACAl27du00Z84c2zMKZO/evUpNTdXq1au1adMmZWVlWdtSunRpNWzYUI0bN1bz5s1Vv359ud3O+E/foEGDtGLFCtszAPwXgQUEOpfLpeXLl6tOnTq2pxSKx+PRjh07tGHDBm3evFk7d+702YMwIyMjVatWLdWsWVO1atXSbbfdpltuuSUo7qXKry+++EJ9+/a1PQPApQgsIBjEx8dr2rRptmcYd/r0ae3cuVPff/+9Dhw4oP379+vAgQP69ddflZmZqczMzEve9goNDVVYWJhKly6t6OhoRUVFqUyZMrrpppsUGxurm266SZUrV1a5cuUs/q/yH6/Xqw4dOmjXrl22pwC4FIEFBAO3260vv/xSlSpVsj0FASQxMVGjR4+2PQPA73lCbC8AcG0ej8fa9xMiMGVnZ2vChAm2ZwC4AgILCBLz5s2zepM4Asv06dN16NAh2zMAXAGBBQSJ06dPa+HChbZnIAAcP35cU6dOtT0DwFUQWEAQmTlzprxer+0ZsGzSpEnKzMy0PQPAVRBYQBDZs2ePPv/8c9szYNG+ffuUkJBgewaAayCwgCAzffp02xNg0csvv6yLFy/angHgGggsIMisX79e33//ve0ZsCA9PV3Lli2zPQNAHhBYQBDiZveiaeLEidyDBwQJAgsIQklJSfJ4PLZnwI/S09P12Wef2Z4BII8ILCAIHT16VGvWrLE9A340fvx4rl4BQYTAAoJUYmKi7Qnwk2+++UYrVqywPQNAPhBYQJBKSUnR0aNHbc+AH0ycOFG5ubm2ZwDIBwILCFIej0dLliyxPQM+tmPHDq1cudL2DAD5RGABQYy3CZ2Pq1dAcCKwgCCWnp6unTt32p4BH8nIyFBqaqrtGQAKgMACgtzy5cttT4CPTJ8+natXQJAisIAgR2A507Fjx/TRRx/ZngGggAgsIMilp6frxx9/tD0Dhs2ePVvZ2dm2ZwAoIAILcICUlBTbE2DQ+fPnlZCQYHsGgEIgsAAH4CtUnCUpKUm//PKL7RkACoHAAhxg8+bNPHTUIXJzc/Xee+/ZngGgkAgswAG8Xi9vEzrEqlWrlJGRYXsGgEIisACHILCcYc6cObYnADCAwAIcYsOGDfJ4PLZnoBAOHz6sL774wvYMAAYQWIBDZGVlaevWrbZnoBCSkpKUk5NjewYAAwgswEHWr19vewIKKDc3l++WBByEwAIcZN26dbYnoIA2bNigvXv32p4BwBACC3CQbdu2cR9WkFqwYIHtCQAMIrAABzl37pzS09Ntz0A+ZWZmKjk52fYMAAYRWIDDbNmyxfYE5NOSJUt07tw52zMAGERgAQ5DYAWfRYsW2Z4AwDACC3CYb7/91vYE5MPhw4e1efNm2zMAGEZgAQ6TkZHBje5BZOnSpcrNzbU9A4BhBBbgMBcuXODj/kFk2bJlticA8AECC3Cg7777zvYE5MGxY8e0adMm2zMA+ACBBTjQnj17bE9AHqxZs0Zer9f2DAA+QGABDnTgwAHbE5AHq1evtj0BgI8QWIADEViBz+v1Ki0tzfYMAD5CYAEOtH//ftsTcA3bt2/X8ePHbc8A4CMEFuBAR48etT0B17Bx40bbEwD4EIEFOFBmZibPwgpwBBbgbAQW4EC5ubnKzMy0PQNXkJubq3/961+2ZwDwIQILcKiTJ0/anoAr2LNnD/dfAQ5HYAEOde7cOdsTcAU7d+60PQGAjxFYgEPl5OTYnoAr4Au5AecjsACHIrACF1ewAOcjsACH4itYAtf3339vewIAHyOwAIcqVqyY7Qm4jJycHB08eND2DAA+RmABDhUREWF7Ai7j8OHDPKMMKAIILMChwsLCbE/AZfA9kUDRQGABDuRyubiCFaB4/hVQNBBYgAPdcMMN3IMVoHjCPlA0EFiAA1WqVMn2BFwBgQUUDQQW4EAEVuA6e/as7QkA/IDAAhzoD3/4g+0JAFCkEViAA9WoUcP2BFyBy+WyPQGAHxBYgAPVrFnT9gRcQWhoqO0JAPyAwAIcxu12q2rVqrZn4Ar4dCdQNBBYgMNUrVpVxYsXtz0DVxAVFWV7AgA/ILAAh2nUqJHtCbgKAgsoGggswGEIrMAWHR1tewIAPyCwAIdp2LCh7Qm4ijJlytieAMAPCCzAQWJiYlS5cmXbM3AVFStWlNvttj0DgI8RWICDtGrViucsBTi3262KFSvangHAxwgswEFatWplewLyIDY21vYEAD5GYAEO4XK5dMcdd9iegTy4+eabbU8A4GMEFuAQdevWVUxMjO0ZyINbb73V9gQAPkZgAQ7RsWNH2xOQRwQW4HwEFuAQBFbwqFmzJt9JCDgcgQU4QGxsrGrUqGF7BvKoRIkSqlKliu0ZAHyIwAIcoHv37rYnIJ94ICzgbAQW4AA9evSwPQH51KRJE9sTAPgQgQUEufr166t69eq2ZyCfbr/9dtsTAPgQgQUEuV69etmegAKIjY1VhQoVbM8A4CMEFhDE3G634uPjbc9AAfHkfcC5CCwgiMXFxals2bK2Z6CA4uLibE8A4CMEFhDEevfubXsCCqF169Zyu922ZwDwAQILCFIRERFq166d7RkohPDwcB7XADgUgQUEqV69eql48eK2Z6CQOnfubHsCAB8gsIAg5HK59NBDD9meAQO6du0ql8tlewYAwwgsIAi1adNGVatWtT0DBlSsWFH16tWzPQOAYQQWEIQGDhxoewIM6tq1q+0JAAwjsIAgU7lyZd155522Z8Cgu+++W6GhobZnADCIwAKCzKBBgxQSwr+6TlK+fHk1bdrU9gwABvFfaSCIhIWFqU+fPrZnwAf45wo4C4EFBJF7771X4eHhtmfAB7p06aJSpUrZngHAEAILCBKhoaEaPHiw7RnwkVKlSqlnz562ZwAwhMACgkT37t0VGxtrewZ8aNCgQTwTC3AIAgsIAi6XS4888ojtGfCx6tWrq0mTJrZnADCAwAKCQOfOnVWjRg3bM+AHPKEfcAYCCwgCf/7zn21PgJ907txZFSpUsD0DQCERWECAa9OmDV+lUoS43W498MADtmcAKCQCCwhwjz76qO0J8LP+/fvruuuusz0DQCEQWEAAa9asGTc9F0E33HCDunTpYnsGgEIgsIAA9vjjj9ueAEtGjBjBIxuAIEZgAQGqVatWatGihe0ZsKR27dpq27at7RkACojAAgKQy+XSU089ZXsGLOMKJhC8CCwgAHXp0kUNGjSwPQOW1a9fX61bt7Y9A0ABEFhAgAkNDdUTTzxhewYCxJgxY2xPAFAABBYQYPr06aNq1arZnoEA0bBhQzVr1sz2DAD5RGABAaRYsWIaOXKk7RkIMKNGjbI9AUA+uW0PAPBfAwYM0B/+8AfbM/zu6NGj+vnnn/Xrr7/q1KlTOnnypLKyspSTk6MzZ85IkkJCQhQeHq6IiAiVKlVK0dHRqlSpkm666SZdf/31lv8X+FbLli3VuHFjbdq0yfYUAHnkqlix4kURWoB1ERERWr9+vaKjo21P8YmzZ89q9+7dSk9PV3p6ujIyMnTgwAHt379f58+fL9Sxy5Qpo6pVq6p69eqqVauWatasqTp16qh48eKG1tu3ceNG3X333bZnAMgbD2EFBIiRI0c6Jq5ycnK0e/dubd68WVu3btXWrVuVkZEhr9frk/MdP35cx48f18aNG3/7WbFixVS3bl01bNhQTZo0UfPmzRUREeGT8/tDkyZN1LFjR61YscL2FAB5wBUsIADExsbqiy++ULFixWxPKbDdu3dr3bp1Wr9+vb766iudOnXK9qRLuN3u3x578J8v0A4JCa7bUDMyMtSuXTt5PB7bUwBcnYfAAgLAzJkz1blzZ9sz8iUnJ0dbtmzRypUrlZycrL1799qelC/R0dGKi4tTfHy8WrduHTRxO3bsWCUkJNieAeDqCCzAtmbNmmnRokW2Z+TJ+fPnlZaWppUrV2rFihX65ZdfbE8yIiIiQnfddZd69+6txo0b255zVceOHVOLFi1+u/kfQEAisACbQkJCtGzZMtWpU8f2lCs6e/asli9fruXLl2vNmjU6d+6c7Uk+VaNGDd1zzz3q2bOnYmJibM+5rPHjx+uNN96wPQPAlRFYgE333nuvXn/9ddszLmv79u2aN2+elixZUiSvloSEhKhFixbq3bu3unbtqhIlStie9JusrCy1bNlSR48etT0FwOURWIAtYWFhWrt2rcqVK2d7ym8OHz6shQsXKikpST/++KPtOQGjTJkyeuCBBzRw4MCAuaqVkJCgsWPH2p4B4PIILMCWF154QcOHD7c9QxcvXtRnn32mxMRErV27Vjk5ObYnBaxixYrprrvu0uDBg1WvXj2rW7xer+Lj47Vt2zarOwBcFoEF2FCtWjWtXLlSbre9f/WOHz+uBQsWaPbs2Tp06JC1HcGqbt26Gjx4sHr06GHtn+PXX3+tbt26+ez5YgAKjMAC/M3lcmnhwoXWvsB3165deu+99/TRRx8V+gnqkG688UYNGTJE/fr1s3Kf1pNPPqn58+f7/bwArorAAvytV69emjJlil/P6fV6tX79er333ntKTU1Vbm6uX89fFERHR2vgwIEaOnSowsPD/XbeEydO6I477tCJEyf8dk4A10RgAf4UHh6utWvX+u1G6QsXLigxMVHTpk0LugeBBqvo6GgNGzZMAwcOVFhYmF/OOWfOHD377LN+OReAPCGwAH968cUXNWTIEJ+f58KFC0pKStIbb7yhn3/+2efnw+9FRkZq8ODBGjJkiM+/A5Eb3oGAQ2AB/lKrVi0tX77cpzdEnzlzRh988IGmT5/umKesB7vSpUtr+PDhGjp0qEqWLOmz82zZskXdu3fnhncgMHhCw8PDX5AUXN94CgSZkJAQzZw5UzfeeKNPjn/mzBnNmDFDw4cP18qVK3X27FmfnAf5d/78ea1fv17z5s1Tbm6uGjRooNDQUOPnqVChgk6ePKmtW7caPzaAfPNyBQvwg8GDB2vcuHHGj5uVlaUZM2Zo2rRpyszMNH58mPfHP/5RTz/9tLp06SKXy2X02FlZWYqLi9OBAweMHhdAvvEWIeBrFStW1OrVq43e8OzxeLRgwQJNnDiRr0sJUvXr19dzzz2n5s2bGz3u6tWr1a9fP6PHBJBvvEUI+Nqbb76pmjVrGjmW1+vV4sWLNXToUC1evFhZWVlGjgv/+8/XEn399deqXbu2ypQpY+S4lStX1r59+7Rr1y4jxwNQILxFCPhSt27d9O677xo5Vlpaml566SXt3LnTyPEQONxut+677z49/fTTioqKKvTxTpw4oTvvvFPHjh0zsA5AAXAFC/CV8PBwzZ07V6VKlSrUcbZv364RI0Zo8uTJfDLQobxer7Zv366kpCRFRESodu3ahbo/q0SJEipfvryWLVtmcCWAfPASVoCPvPjii4V6oOiRI0c0duxYdevWTRs3bjS4DIHq2LFjeuqpp9S5c+dC/zPv2bOnunbtamgZgPziLULAB+Li4jR37twC/e25c+f07rvv6u233+ZxC0WYy+VSjx499Pzzz6t8+fIFOsaxY8fUtm1b3ioE/I+3CAHTwsPDNW/evHx/H11ubq6Sk5M1ePBgLV++XBcvXvTRQgSL9PR0zZ07V6GhobrtttsUEpK//1SXLFlSVapU0SeffOKjhQCuwEtgAYaNHz9eTZo0ydff7Ny5U0OHDtX06dN1+vRpHy1DMPJ4PEpLS1Nqaqrq1KmT76tZVapU0U8//aRvv/3WRwsBXAafIgRMateunebMmZPn12dmZmrChAmaPXu2PB6PD5fBCVwul3r16qW//vWv+fq0YWZmptq2bauDBw/6cB2A/8FbhIApkZGRmjdvXp4+NZibm6uPPvpIAwcOVFpaGt8fhzz79ttvtWjRIlWoUEE1atTI098UL15cNWrU0OLFi328DsD/x1uEgCnjx49Xo0aNrvm69PR0Pfzww5oxYwYPCkWBZGVlKTk5Wdu2bVOTJk0UERFxzb+JjY3VmTNntHnzZj8sBIo83iIETOjQoYNmzZp11dd4PB69++67mjBhgi5cuOCnZXC6EiVK6PHHH9eIESOueRO8x+NR9+7dtW3bNj+tA4osvosQKKzo6Gh9/vnnKlu27BVfs2XLFj3xxBP67rvv/LgMRUnjxo01YcIEVa1a9aqv27t3rzp27KgzZ874aRlQJHEPFlBYkyZNUoMGDS77u+zsbP3jH//QE088wVPY4VOHDh3Shx9+qJycHDVu3PiKV7MiIyN1ww03KCUlxc8LgSKFe7CAwujWrZvGjBlz2d+lpaWpX79+Sk1NVW5urp+XoSjKycnRV199pTVr1qhp06aKjo6+7Ovq1KmjjIwM7d69288LgSKDe7CAgqpQoYJSU1MVGRl5yc9PnTqlcePGKTExkbCCNSVKlNDzzz+vAQMGXPZ7DU+fPq1OnTpp3759FtYBjsc9WEBBhISEaMGCBWrRosUlP09NTdXTTz+tn3/+2dIy4FJ33HGHJk2apAoVKvzud99++63i4+OVnZ1tYRngaB7eGgQK4E9/+tMlcXXs2DENGzZMAwYMIK4QUNLS0tS2bdvLfl1OrVq19Je//MXCKsD5uAcLyKcInvDWAAAD50lEQVS6devqzTffVGhoqCRpzZo16tevn7Zu3Wp5GXB558+fV3Jysnbv3q2WLVuqRIkSv/2uXr162rdvn3bt2mVxIeA43IMF5EepUqW0YsUKVa5cWVlZWRo3bpwSEhJszwLyrHz58nr99dfVunXr33525swZdenSRT/88IPFZYCj8BYhkB8vvfSSKleurG3btqlTp07EFYLO4cOH9cADD2js2LE6e/asJCksLEyzZs1SeHi45XWAcxBYQB5169ZNvXr10oQJE9S9e3f9+OOPticBBZKbm6uEhAR16tRJO3bskCRVqVJFkydPvuwnDgHkH/dgAXkQGxurcePGaciQIVqyZAlfzgxHOHHihJKSkhQeHq4GDRqoatWq8nq92rBhg+1pQLDjHizgWtxut4YMGaL58+fr9OnTtucAPtGhQwe9/vrrioyM1PDhw5WcnGx7EhDMeA4WcC0lS5b87V4VwMkqVqyot99+WzVr1lTXrl256R0oOAILAPBfoaGhGjVqlOLj4xUfH6/MzEzbk4BgRGABAH6vZcuW6tGjh8aOHaucnBzbc4BgQ2ABAC6vXLlyatSoEfdjAflHYAEArsztdis0NFTnz5+3PQUIJh7CCgBwRR6PRx6Px/YMIOjw/CsAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADDCCwAAADD3JIu2h4BAADgIBf/HzKVqPl91gZiAAAAAElFTkSuQmCC";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!-- Created with Inkscape (http://www.inkscape.org/) --%3e%3csvg width='53' height='53' viewBox='0 0 14.022916 14.022917' version='1.1' id='svg1' inkscape:version='1.3.2 (091e20e%2c 2023-11-25)' sodipodi:docname='gemini-insert-icon.svg' inkscape:export-filename='gemini-inset-icon.png' inkscape:export-xdpi='96' inkscape:export-ydpi='96' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3e %3csodipodi:namedview id='namedview1' pagecolor='white' bordercolor='black' borderopacity='0.25' inkscape:showpageshadow='2' inkscape:pageopacity='0.0' inkscape:pagecheckerboard='true' inkscape:deskcolor='%23d1d1d1' inkscape:document-units='px' inkscape:zoom='3.6780415' inkscape:cx='61.037919' inkscape:cy='67.155305' inkscape:window-width='1704' inkscape:window-height='1127' inkscape:window-x='100' inkscape:window-y='1159' inkscape:window-maximized='0' inkscape:current-layer='layer1' /%3e %3cdefs id='defs1' /%3e %3cg inkscape:label='Layer 1' inkscape:groupmode='layer' id='layer1'%3e %3crect style='display:none%3bfill:black%3bstroke:black%3bstroke-width:0.01' id='rect1' width='14.012917' height='14.012917' x='0.0050000018' y='0.0049999976' /%3e %3cpath id='path1' style='fill:black%3bfill-opacity:1%3bstroke:black%3bstroke-width:0.264583%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='m 13.012508%2c13.272509 c 0%2c0 -3.5759556%2c-2.307175 -6.0010493%2c-2.358612 -2.6673662%2c-0.05657 -6.26105039%2c2.098607 -6.26105039%2c2.098607 0%2c0 2.36925789%2c-3.5759479 2.42069399%2c-6.0010462 0.056572%2c-2.6673595 -2.1606951%2c-6.26105063 -2.1606951%2c-6.26105063 0%2c0 3.5759521%2c2.41176333 6.0010515%2c2.46319863 2.6673605%2c0.056572 6.2610503%2c-2.2032008 6.2610503%2c-2.2032008 0%2c0 -2.334512%2c3.5759536 -2.38595%2c6.0010528 -0.05657%2c2.667361 2.125949%2c6.2610512 2.125949%2c6.2610512 z' sodipodi:nodetypes='cccscscsc' /%3e %3cpath id='path1-8' style='fill:white%3bfill-opacity:1%3bstroke:none%3bstroke-width:0.264583%3bstroke-linecap:round%3bstroke-linejoin:round%3bstroke-dasharray:none' d='m 13.012508%2c13.272509 c 0%2c0 -3.5759585%2c-3.9345896 -6.0010521%2c-3.9860277 -2.6673662%2c-0.056573 -6.26104759%2c3.7260227 -6.26104759%2c3.7260227 0%2c0 3.89461389%2c-3.5759453 3.94604999%2c-6.0010436 0.056572%2c-2.6673595 -3.6860511%2c-6.26105323 -3.6860511%2c-6.26105323 0%2c0 3.5759493%2c3.94443513 6.0010487%2c3.99587043 2.6673605%2c0.056572 6.2610531%2c-3.7358726 6.2610531%2c-3.7358726 0%2c0 -3.911256%2c3.5759562 -3.9626921%2c6.0010554 -0.056572%2c2.667361 3.7026911%2c6.2610486 3.7026911%2c6.2610486 z' sodipodi:nodetypes='cccscscsc' /%3e %3c/g%3e%3c/svg%3e";

var en$1 = {
	"gai.entry.name": "GAI",
	"gai.entry.description": "Play with Google generative AI, Gemini!"
};
var ja$1 = {
	"gai.entry.name": "GAI",
	"gai.entry.description": "Google生成AI、Geminiと遊ぼう!"
};
var translations$1 = {
	en: en$1,
	ja: ja$1,
	"ja-Hira": {
	"gai.entry.name": "GAI",
	"gai.entry.description": "GoogleせいせいAI、Geminiとあそぼう!"
}
};

var version$1 = "0.8.1";

/**
 * This is an extension for Xcratch.
 */


/**
 * Formatter to translate the messages in this extension.
 * This will be replaced which is used in the React component.
 * @param {object} messageData - data for format-message
 * @returns {string} - translated message for the current locale
 */
var formatMessage$1 = function formatMessage(messageData) {
  return messageData.defaultMessage;
};
var version = "v".concat(version$1);
var entry = {
  get name() {
    return formatMessage$1({
      id: 'gai.entry.name',
      defaultMessage: 'GAI',
      description: 'name of the extension'
    });
  },
  extensionId: 'gai',
  extensionURL: 'https://yokobond.github.io/xcx-gai/dist/gai.mjs',
  collaborator: 'Yengawa Lab',
  iconURL: img$2,
  insetIconURL: img$1,
  get description() {
    return "".concat(formatMessage$1({
      defaultMessage: 'Play with Google generative AI, Gemini!',
      description: 'Description for this extension',
      id: 'gai.entry.description'
    }), " (").concat(version, ")");
  },
  tags: ['function', 'image', 'sound', 'text', 'ai'],
  featured: true,
  disabled: false,
  bluetoothRequired: false,
  internetConnectionRequired: false,
  helpLink: 'https://yokobond.github.io/xcx-gai/',
  setFormatMessage: function setFormatMessage(formatter) {
    formatMessage$1 = formatter;
  },
  translationMap: translations$1
};

function _typeof$2(o) {
  "@babel/helpers - typeof";

  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$2(o);
}

function _arrayLikeToArray$2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$2(r);
}

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}

function _unsupportedIterableToArray$2(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0;
  }
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray$2(r) || _nonIterableSpread();
}

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray$2(r, e) || _nonIterableRest();
}

function _classCallCheck$1(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function toPrimitive$1(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey$1(t) {
  var i = toPrimitive$1(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}

function _defineProperties$1(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey$1(o.key), o);
  }
}
function _createClass$1(e, r, t) {
  return r && _defineProperties$1(e.prototype, r), t && _defineProperties$1(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

/**
 * Types of block
 * @enum {string}
 */
var blockType;
var hasRequiredBlockType;
function requireBlockType() {
  if (hasRequiredBlockType) return blockType;
  hasRequiredBlockType = 1;
  var BlockType = {
    /**
     * Boolean reporter with hexagonal shape
     */
    BOOLEAN: 'Boolean',
    /**
     * A button (not an actual block) for some special action, like making a variable
     */
    BUTTON: 'button',
    /**
     * Command block
     */
    COMMAND: 'command',
    /**
     * Specialized command block which may or may not run a child branch
     * The thread continues with the next block whether or not a child branch ran.
     */
    CONDITIONAL: 'conditional',
    /**
     * Specialized hat block with no implementation function
     * This stack only runs if the corresponding event is emitted by other code.
     */
    EVENT: 'event',
    /**
     * Hat block which conditionally starts a block stack
     */
    HAT: 'hat',
    /**
     * Specialized command block which may or may not run a child branch
     * If a child branch runs, the thread evaluates the loop block again.
     */
    LOOP: 'loop',
    /**
     * General reporter with numeric or string value
     */
    REPORTER: 'reporter'
  };
  blockType = BlockType;
  return blockType;
}

var blockTypeExports = requireBlockType();
var BlockType = /*@__PURE__*/getDefaultExportFromCjs(blockTypeExports);

/**
 * Block argument types
 * @enum {string}
 */
var argumentType;
var hasRequiredArgumentType;
function requireArgumentType() {
  if (hasRequiredArgumentType) return argumentType;
  hasRequiredArgumentType = 1;
  var ArgumentType = {
    /**
     * Numeric value with angle picker
     */
    ANGLE: 'angle',
    /**
     * Boolean value with hexagonal placeholder
     */
    BOOLEAN: 'Boolean',
    /**
     * Numeric value with color picker
     */
    COLOR: 'color',
    /**
     * Numeric value with text field
     */
    NUMBER: 'number',
    /**
     * String value with text field
     */
    STRING: 'string',
    /**
     * String value with matrix field
     */
    MATRIX: 'matrix',
    /**
     * MIDI note number with note picker (piano) field
     */
    NOTE: 'note',
    /**
     * Inline image on block (as part of the label)
     */
    IMAGE: 'image'
  };
  argumentType = ArgumentType;
  return argumentType;
}

var argumentTypeExports = requireArgumentType();
var ArgumentType = /*@__PURE__*/getDefaultExportFromCjs(argumentTypeExports);

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}

var color;
var hasRequiredColor;
function requireColor() {
  if (hasRequiredColor) return color;
  hasRequiredColor = 1;
  var Color = /*#__PURE__*/function () {
    function Color() {
      _classCallCheck(this, Color);
    }
    return _createClass(Color, null, [{
      key: "RGB_BLACK",
      get:
      /**
       * @typedef {object} RGBObject - An object representing a color in RGB format.
       * @property {number} r - the red component, in the range [0, 255].
       * @property {number} g - the green component, in the range [0, 255].
       * @property {number} b - the blue component, in the range [0, 255].
       */

      /**
       * @typedef {object} HSVObject - An object representing a color in HSV format.
       * @property {number} h - hue, in the range [0-359).
       * @property {number} s - saturation, in the range [0,1].
       * @property {number} v - value, in the range [0,1].
       */

      /** @type {RGBObject} */
      function get() {
        return {
          r: 0,
          g: 0,
          b: 0
        };
      }

      /** @type {RGBObject} */
    }, {
      key: "RGB_WHITE",
      get: function get() {
        return {
          r: 255,
          g: 255,
          b: 255
        };
      }

      /**
       * Convert a Scratch decimal color to a hex string, #RRGGBB.
       * @param {number} decimal RGB color as a decimal.
       * @return {string} RGB color as #RRGGBB hex string.
       */
    }, {
      key: "decimalToHex",
      value: function decimalToHex(decimal) {
        if (decimal < 0) {
          decimal += 0xFFFFFF + 1;
        }
        var hex = Number(decimal).toString(16);
        hex = "#".concat('000000'.substr(0, 6 - hex.length)).concat(hex);
        return hex;
      }

      /**
       * Convert a Scratch decimal color to an RGB color object.
       * @param {number} decimal RGB color as decimal.
       * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       */
    }, {
      key: "decimalToRgb",
      value: function decimalToRgb(decimal) {
        var a = decimal >> 24 & 0xFF;
        var r = decimal >> 16 & 0xFF;
        var g = decimal >> 8 & 0xFF;
        var b = decimal & 0xFF;
        return {
          r: r,
          g: g,
          b: b,
          a: a > 0 ? a : 255
        };
      }

      /**
       * Convert a hex color (e.g., F00, #03F, #0033FF) to an RGB color object.
       * CC-BY-SA Tim Down:
       * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
       * @param {!string} hex Hex representation of the color.
       * @return {RGBObject} null on failure, or rgb: {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       */
    }, {
      key: "hexToRgb",
      value: function hexToRgb(hex) {
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
          return r + r + g + g + b + b;
        });
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }

      /**
       * Convert an RGB color object to a hex color.
       * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       * @return {!string} Hex representation of the color.
       */
    }, {
      key: "rgbToHex",
      value: function rgbToHex(rgb) {
        return Color.decimalToHex(Color.rgbToDecimal(rgb));
      }

      /**
       * Convert an RGB color object to a Scratch decimal color.
       * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       * @return {!number} Number representing the color.
       */
    }, {
      key: "rgbToDecimal",
      value: function rgbToDecimal(rgb) {
        return (rgb.r << 16) + (rgb.g << 8) + rgb.b;
      }

      /**
      * Convert a hex color (e.g., F00, #03F, #0033FF) to a decimal color number.
      * @param {!string} hex Hex representation of the color.
      * @return {!number} Number representing the color.
      */
    }, {
      key: "hexToDecimal",
      value: function hexToDecimal(hex) {
        return Color.rgbToDecimal(Color.hexToRgb(hex));
      }

      /**
       * Convert an HSV color to RGB format.
       * @param {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
       * @return {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       */
    }, {
      key: "hsvToRgb",
      value: function hsvToRgb(hsv) {
        var h = hsv.h % 360;
        if (h < 0) h += 360;
        var s = Math.max(0, Math.min(hsv.s, 1));
        var v = Math.max(0, Math.min(hsv.v, 1));
        var i = Math.floor(h / 60);
        var f = h / 60 - i;
        var p = v * (1 - s);
        var q = v * (1 - s * f);
        var t = v * (1 - s * (1 - f));
        var r;
        var g;
        var b;
        switch (i) {
          default:
          case 0:
            r = v;
            g = t;
            b = p;
            break;
          case 1:
            r = q;
            g = v;
            b = p;
            break;
          case 2:
            r = p;
            g = v;
            b = t;
            break;
          case 3:
            r = p;
            g = q;
            b = v;
            break;
          case 4:
            r = t;
            g = p;
            b = v;
            break;
          case 5:
            r = v;
            g = p;
            b = q;
            break;
        }
        return {
          r: Math.floor(r * 255),
          g: Math.floor(g * 255),
          b: Math.floor(b * 255)
        };
      }

      /**
       * Convert an RGB color to HSV format.
       * @param {RGBObject} rgb - {r: red [0,255], g: green [0,255], b: blue [0,255]}.
       * @return {HSVObject} hsv - {h: hue [0,360), s: saturation [0,1], v: value [0,1]}
       */
    }, {
      key: "rgbToHsv",
      value: function rgbToHsv(rgb) {
        var r = rgb.r / 255;
        var g = rgb.g / 255;
        var b = rgb.b / 255;
        var x = Math.min(Math.min(r, g), b);
        var v = Math.max(Math.max(r, g), b);

        // For grays, hue will be arbitrarily reported as zero. Otherwise, calculate
        var h = 0;
        var s = 0;
        if (x !== v) {
          var f = r === x ? g - b : g === x ? b - r : r - g;
          var i = r === x ? 3 : g === x ? 5 : 1;
          h = (i - f / (v - x)) * 60 % 360;
          s = (v - x) / v;
        }
        return {
          h: h,
          s: s,
          v: v
        };
      }

      /**
       * Linear interpolation between rgb0 and rgb1.
       * @param {RGBObject} rgb0 - the color corresponding to fraction1 <= 0.
       * @param {RGBObject} rgb1 - the color corresponding to fraction1 >= 1.
       * @param {number} fraction1 - the interpolation parameter. If this is 0.5, for example, mix the two colors equally.
       * @return {RGBObject} the interpolated color.
       */
    }, {
      key: "mixRgb",
      value: function mixRgb(rgb0, rgb1, fraction1) {
        if (fraction1 <= 0) return rgb0;
        if (fraction1 >= 1) return rgb1;
        var fraction0 = 1 - fraction1;
        return {
          r: fraction0 * rgb0.r + fraction1 * rgb1.r,
          g: fraction0 * rgb0.g + fraction1 * rgb1.g,
          b: fraction0 * rgb0.b + fraction1 * rgb1.b
        };
      }
    }]);
  }();
  color = Color;
  return color;
}

var cast;
var hasRequiredCast;
function requireCast() {
  if (hasRequiredCast) return cast;
  hasRequiredCast = 1;
  var Color = requireColor();

  /**
   * @fileoverview
   * Utilities for casting and comparing Scratch data-types.
   * Scratch behaves slightly differently from JavaScript in many respects,
   * and these differences should be encapsulated below.
   * For example, in Scratch, add(1, join("hello", world")) -> 1.
   * This is because "hello world" is cast to 0.
   * In JavaScript, 1 + Number("hello" + "world") would give you NaN.
   * Use when coercing a value before computation.
   */
  var Cast = /*#__PURE__*/function () {
    function Cast() {
      _classCallCheck(this, Cast);
    }
    return _createClass(Cast, null, [{
      key: "toNumber",
      value:
      /**
       * Scratch cast to number.
       * Treats NaN as 0.
       * In Scratch 2.0, this is captured by `interp.numArg.`
       * @param {*} value Value to cast to number.
       * @return {number} The Scratch-casted number value.
       */
      function toNumber(value) {
        // If value is already a number we don't need to coerce it with
        // Number().
        if (typeof value === 'number') {
          // Scratch treats NaN as 0, when needed as a number.
          // E.g., 0 + NaN -> 0.
          if (Number.isNaN(value)) {
            return 0;
          }
          return value;
        }
        if (typeof value === 'string') {
          // Replace full-width numbers with half-width ones.
          value = value.replace(/[０-９＋．ｅ]/g, function (s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
          });
          value = value.replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');
        }
        var n = Number(value);
        if (Number.isNaN(n)) {
          // Scratch treats NaN as 0, when needed as a number.
          // E.g., 0 + NaN -> 0.
          return 0;
        }
        return n;
      }

      /**
       * Scratch cast to boolean.
       * In Scratch 2.0, this is captured by `interp.boolArg.`
       * Treats some string values differently from JavaScript.
       * @param {*} value Value to cast to boolean.
       * @return {boolean} The Scratch-casted boolean value.
       */
    }, {
      key: "toBoolean",
      value: function toBoolean(value) {
        // Already a boolean?
        if (typeof value === 'boolean') {
          return value;
        }
        if (typeof value === 'string') {
          // These specific strings are treated as false in Scratch.
          if (value === '' || value === '0' || value.toLowerCase() === 'false') {
            return false;
          }
          // All other strings treated as true.
          return true;
        }
        // Coerce other values and numbers.
        return Boolean(value);
      }

      /**
       * Scratch cast to string.
       * @param {*} value Value to cast to string.
       * @return {string} The Scratch-casted string value.
       */
    }, {
      key: "toString",
      value: function toString(value) {
        return String(value).replace(/\\n/g, '\n').replace(/\\t/g, '\t');
      }

      /**
       * Cast any Scratch argument to an RGB color array to be used for the renderer.
       * @param {*} value Value to convert to RGB color array.
       * @return {Array.<number>} [r,g,b], values between 0-255.
       */
    }, {
      key: "toRgbColorList",
      value: function toRgbColorList(value) {
        var color = Cast.toRgbColorObject(value);
        return [color.r, color.g, color.b];
      }

      /**
       * Cast any Scratch argument to an RGB color object to be used for the renderer.
       * @param {*} value Value to convert to RGB color object.
       * @return {RGBOject} [r,g,b], values between 0-255.
       */
    }, {
      key: "toRgbColorObject",
      value: function toRgbColorObject(value) {
        var color;
        if (typeof value === 'string' && value.substring(0, 1) === '#') {
          color = Color.hexToRgb(value);

          // If the color wasn't *actually* a hex color, cast to black
          if (!color) color = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
          };
        } else {
          color = Color.decimalToRgb(Cast.toNumber(value));
        }
        return color;
      }

      /**
       * Determine if a Scratch argument is a white space string (or null / empty).
       * @param {*} val value to check.
       * @return {boolean} True if the argument is all white spaces or null / empty.
       */
    }, {
      key: "isWhiteSpace",
      value: function isWhiteSpace(val) {
        return val === null || typeof val === 'string' && val.trim().length === 0;
      }

      /**
       * Compare two values, using Scratch cast, case-insensitive string compare, etc.
       * In Scratch 2.0, this is captured by `interp.compare.`
       * @param {*} v1 First value to compare.
       * @param {*} v2 Second value to compare.
       * @returns {number} Negative number if v1 < v2; 0 if equal; positive otherwise.
       */
    }, {
      key: "compare",
      value: function compare(v1, v2) {
        var n1 = Number(v1);
        var n2 = Number(v2);
        if (n1 === 0 && Cast.isWhiteSpace(v1)) {
          n1 = NaN;
        } else if (n2 === 0 && Cast.isWhiteSpace(v2)) {
          n2 = NaN;
        }
        if (isNaN(n1) || isNaN(n2)) {
          // At least one argument can't be converted to a number.
          // Scratch compares strings as case insensitive.
          var s1 = Cast.toString(v1).toLowerCase();
          var s2 = Cast.toString(v2).toLowerCase();
          if (s1 < s2) {
            return -1;
          } else if (s1 > s2) {
            return 1;
          }
          return 0;
        }
        // Handle the special case of Infinity
        if (n1 === Infinity && n2 === Infinity || n1 === -Infinity && n2 === -Infinity) {
          return 0;
        }
        // Compare as numbers.
        return n1 - n2;
      }

      /**
       * Determine if a Scratch argument number represents a round integer.
       * @param {*} val Value to check.
       * @return {boolean} True if number looks like an integer.
       */
    }, {
      key: "isInt",
      value: function isInt(val) {
        // Values that are already numbers.
        if (typeof val === 'number') {
          if (isNaN(val)) {
            // NaN is considered an integer.
            return true;
          }
          // True if it's "round" (e.g., 2.0 and 2).
          return val === parseInt(val, 10);
        } else if (typeof val === 'boolean') {
          // `True` and `false` always represent integer after Scratch cast.
          return true;
        } else if (typeof val === 'string') {
          // If it contains a decimal point, don't consider it an int.
          return val.indexOf('.') < 0;
        }
        return false;
      }
    }, {
      key: "LIST_INVALID",
      get: function get() {
        return 'INVALID';
      }
    }, {
      key: "LIST_ALL",
      get: function get() {
        return 'ALL';
      }

      /**
       * Compute a 1-based index into a list, based on a Scratch argument.
       * Two special cases may be returned:
       * LIST_ALL: if the block is referring to all of the items in the list.
       * LIST_INVALID: if the index was invalid in any way.
       * @param {*} index Scratch arg, including 1-based numbers or special cases.
       * @param {number} length Length of the list.
       * @param {boolean} acceptAll Whether it should accept "all" or not.
       * @return {(number|string)} 1-based index for list, LIST_ALL, or LIST_INVALID.
       */
    }, {
      key: "toListIndex",
      value: function toListIndex(index, length, acceptAll) {
        if (typeof index !== 'number') {
          if (index === 'all') {
            return acceptAll ? Cast.LIST_ALL : Cast.LIST_INVALID;
          }
          if (index === 'last') {
            if (length > 0) {
              return length;
            }
            return Cast.LIST_INVALID;
          } else if (index === 'random' || index === 'any') {
            if (length > 0) {
              return 1 + Math.floor(Math.random() * length);
            }
            return Cast.LIST_INVALID;
          }
        }
        index = Math.floor(Cast.toNumber(index));
        if (index < 1 || index > length) {
          return Cast.LIST_INVALID;
        }
        return index;
      }
    }]);
  }();
  cast = Cast;
  return cast;
}

var castExports = requireCast();
var Cast = /*@__PURE__*/getDefaultExportFromCjs(castExports);

var en = {
	"gai.name": "GAI",
	"gai.generate": "generate [PROMPT]",
	"gai.generateDefault": "What is AI?",
	"gai.costumeData": "costume data [COSTUME]",
	"gai.backdropData": "backdrop data [BACKDROP]",
	"gai.snapshotData": "snapshot data",
	"gai.soundData": "sound data [SOUND]",
	"gai.startListening": "start listening",
	"gai.stopListening": "stop listening",
	"gai.listenedData": "listened data",
	"gai.chat": "chat [PROMPT]",
	"gai.chatDefault": "Hello Gemini!",
	"gai.chatHistory": "chat history",
	"gai.startChat": "start chat with history [HISTORY]",
	"gai.embeddingFor": "embedding of [CONTENT] for [TASK_TYPE]",
	"gai.embeddingTaskTypeMenu.retrievalQuery": "Retrieval Query",
	"gai.embeddingTaskTypeMenu.retrievalDocument": "Retrieval Document",
	"gai.embeddingTaskTypeMenu.semanticSimilarity": "Semantic Similarity",
	"gai.embeddingTaskTypeMenu.classification": "Classification",
	"gai.embeddingTaskTypeMenu.clustering": "Clustering",
	"gai.embeddingTaskTypeMenu.questionAnswering": "Question Answering",
	"gai.embeddingTaskTypeMenu.factVerification": "Fact Verification",
	"gai.embeddingTaskTypeMenu.codeRetrievalQuery": "Code Retrieval Query",
	"gai.embeddingDistanceOf": "[METRIC] of [VECTOR_A] and [VECTOR_B]",
	"gai.distanceMetricMenu.dotProduct": "Dot product",
	"gai.distanceMetricMenu.euclidean": "Euclidean distance",
	"gai.whenResponseReceived": "when response received",
	"gai.responseText": "response #[CANDIDATE_INDEX] text",
	"gai.responseSafetyRating": "response #[CANDIDATE_INDEX] safety rating [HARM_CATEGORY]",
	"gai.setSafetyRating": "set [HARM_CATEGORY] to [BLOCK_THRESHOLD]",
	"gai.whenPartialResponseReceived": "when partial response received",
	"gai.partialResponseText": "partial response text",
	"gai.setGenerativeModel": "use model [MODEL_CODE] for generative",
	"gai.getGenerativeModel": "generative model",
	"gai.setEmbeddingModel": "use model [MODEL_CODE] for embedding",
	"gai.getEmbeddingModel": "embedding model",
	"gai.setGenerationConfig": "set generation [CONFIG] to [VALUE]",
	"gai.generationConfigMenu.maxOutputTokens": "Max output tokens",
	"gai.generationConfigMenu.candidateCount": "Candidate count",
	"gai.generationConfigMenu.stopSequences": "Stop sequences",
	"gai.generationConfigMenu.temperature": "Temperature",
	"gai.generationConfigMenu.topP": "Top P",
	"gai.generationConfigMenu.topK": "Top K",
	"gai.generationConfigMenu.systemInstruction": "System Instruction",
	"gai.generationConfigMenu.responseSchema": "Response Schema",
	"gai.generationConfig": "generation [CONFIG]",
	"gai.setFunctionCallingMode": "set function calling mode [MODE]",
	"gai.returnResultToAI": "return [RESULT] to AI'",
	"gai.functionCallingModeMenu.auto": "Auto",
	"gai.functionCallingModeMenu.any": "Any",
	"gai.functionCallingModeMenu.none": "None",
	"gai.countTokensAs": "count tokens [CONTENT] as [REQUEST_TYPE]",
	"gai.countTokensRequestTypeMenu.generate": "generate",
	"gai.countTokensRequestTypeMenu.chat": "chat",
	"gai.getGenerativeModelID": "generative model ID at [MODEL_INDEX]",
	"gai.getMaxGenerativeModelNumber": "max generative model number",
	"gai.getEmbeddingModelID": "embedding model ID at [MODEL_INDEX]",
	"gai.getMaxEmbeddingModelNumber": "max embedding model number",
	"gai.harmCategoryMenu.hateSpeech": "Hate speech",
	"gai.harmCategoryMenu.sexuallyExplicit": "Sexually explicit",
	"gai.harmCategoryMenu.harassment": "Harassment",
	"gai.harmCategoryMenu.dangerousContent": "Dangerous content",
	"gai.harmCategorySettingMenu.all": "All harm categories",
	"gai.harmBlockThresholdMenu.unspecified": "Unspecified",
	"gai.harmBlockThresholdMenu.blockMost": "Block most",
	"gai.harmBlockThresholdMenu.blockSome": "Block some",
	"gai.harmBlockThresholdMenu.blockFew": "Block few",
	"gai.harmBlockThresholdMenu.blockNone": "Block none",
	"gai.askApiKey": "ask API key",
	"gai.setApiKey": "set API key to [KEY]",
	"gai.apiKey": "API key",
	"gai.apiKeyDialog.message": "set API key",
	"gai.apiKeyDialog.howToGetApiKey": "get API key",
	"gai.apiKeyDialog.cancel": "cancel",
	"gai.apiKeyDialog.set": "set",
	"gai.setBaseUrl": "set base URL to [URL]",
	"gai.baseUrl": "base URL",
	"gai.getValueFromJson": "get [PATH] from JSON [JSON]",
	"gai.getItemOfJsonArray": "item [INDEX] of JSON array [JSON]",
	"gai.lengthOfJsonArray": "length of JSON array [JSON]"
};
var ja = {
	"gai.name": "GAI",
	"gai.generate": "生成[PROMPT]",
	"gai.generateDefault": "AIとは?",
	"gai.costumeData": "コスチューム[COSTUME]のデータ",
	"gai.backdropData": "背景[BACKDROP]のデータ",
	"gai.snapshotData": "スナップショットのデータ",
	"gai.soundData": "音[SOUND]のデータ",
	"gai.startListening": "聞き取り開始",
	"gai.stopListening": "聞き取り終了",
	"gai.listenedData": "聞き取ったデータ",
	"gai.chat": "対話[PROMPT]",
	"gai.chatDefault": "こんにちはジェミニ！",
	"gai.chatHistory": "対話履歴",
	"gai.startChat": "[HISTORY]に続けて対話を始める",
	"gai.embeddingFor": "[CONTENT]の[TASK_TYPE]の埋め込み表現",
	"gai.embeddingTaskTypeMenu.retrievalQuery": "検索の質問として",
	"gai.embeddingTaskTypeMenu.retrievalDocument": "検索される文書として",
	"gai.embeddingTaskTypeMenu.semanticSimilarity": "似た意味を探すため",
	"gai.embeddingTaskTypeMenu.classification": "分類のため",
	"gai.embeddingTaskTypeMenu.clustering": "クラスタリングのため",
	"gai.embeddingTaskTypeMenu.questionAnswering": "質問に答えるため",
	"gai.embeddingTaskTypeMenu.factVerification": "事実を確認するため",
	"gai.embeddingTaskTypeMenu.codeRetrievalQuery": "コード検索の質問として",
	"gai.embeddingDistanceOf": "[VECTOR_A]と[VECTOR_B]の[METRIC]",
	"gai.distanceMetricMenu.dotProduct": "内積",
	"gai.distanceMetricMenu.euclidean": "ユークリッド距離",
	"gai.responseText": "回答[CANDIDATE_INDEX]",
	"gai.whenResponseReceived": "回答を受け取ったとき",
	"gai.responseSafetyRating": "回答[CANDIDATE_INDEX]の[HARM_CATEGORY]のレベル",
	"gai.setSafetyRating": "[HARM_CATEGORY]の[BLOCK_THRESHOLD]",
	"gai.whenPartialResponseReceived": "回答の一部を受け取ったとき",
	"gai.partialResponseText": "回答の一部",
	"gai.setGenerativeModel": "生成のモデルに[MODEL_CODE]を使う",
	"gai.getGenerativeModel": "生成のモデル",
	"gai.setEmbeddingModel": "埋め込み表現のモデルに[MODEL_CODE]を使う",
	"gai.getEmbeddingModel": "埋め込み表現のモデル",
	"gai.setGenerationConfig": "生成の[CONFIG]を[VALUE]にする",
	"gai.generationConfigMenu.maxOutputTokens": "最大トークン数",
	"gai.generationConfigMenu.candidateCount": "回答候補の数",
	"gai.generationConfigMenu.stopSequences": "ストップシーケンス",
	"gai.generationConfigMenu.temperature": "温度",
	"gai.generationConfigMenu.topP": "Top P",
	"gai.generationConfigMenu.topK": "Top K",
	"gai.generationConfigMenu.systemInstruction": "システム インストラクション",
	"gai.generationConfigMenu.responseSchema": "レスポンス スキーマ",
	"gai.generationConfig": "生成の[CONFIG]",
	"gai.setFunctionCallingMode": "関数呼び出しを[MODE]",
	"gai.returnResultToAI": "AIに結果[RESULT]を返す",
	"gai.functionCallingModeMenu.auto": "使う",
	"gai.functionCallingModeMenu.any": "いつも使う",
	"gai.functionCallingModeMenu.none": "使わない",
	"gai.countTokensAs": "[REQUEST_TYPE][CONTENT]のトークン数",
	"gai.countTokensRequestTypeMenu.generate": "生成",
	"gai.countTokensRequestTypeMenu.chat": "対話",
	"gai.getGenerativeModelID": "生成に使えるモデルの[MODEL_INDEX]番目のID",
	"gai.getMaxGenerativeModelNumber": "生成に使えるモデルの数",
	"gai.getEmbeddingModelID": "埋め込みに使えるモデルの[MODEL_INDEX]番目のID",
	"gai.getMaxEmbeddingModelNumber": "埋め込みに使えるモデルの数",
	"gai.harmCategoryMenu.hateSpeech": "ヘイトスピーチ",
	"gai.harmCategoryMenu.sexuallyExplicit": "露骨な性的表現",
	"gai.harmCategoryMenu.harassment": "ハラスメント",
	"gai.harmCategoryMenu.dangerousContent": "危険な内容",
	"gai.harmCategorySettingMenu.all": "すべての危険な内容",
	"gai.harmBlockThresholdMenu.unspecified": "設定をしない",
	"gai.harmBlockThresholdMenu.blockMost": "ほとんどをブロックする",
	"gai.harmBlockThresholdMenu.blockSome": "一部をブロックする",
	"gai.harmBlockThresholdMenu.blockFew": "少しをブロックする",
	"gai.harmBlockThresholdMenu.blockNone": "ブロックをしない",
	"gai.askApiKey": "APIキーを聞く",
	"gai.setApiKey": "APIキーを[KEY]にする",
	"gai.apiKey": "APIキー",
	"gai.apiKeyDialog.message": "APIキーを設定してください",
	"gai.apiKeyDialog.howToGetApiKey": "APIキーを取得",
	"gai.apiKeyDialog.cancel": "キャンセル",
	"gai.apiKeyDialog.set": "設定",
	"gai.setBaseUrl": "ベースURLを[URL]にする",
	"gai.baseUrl": "ベースURL",
	"gai.getValueFromJson": "JSON [JSON]から[PATH]を取得",
	"gai.getItemOfJsonArray": "JSON配列[JSON]の[INDEX]番目",
	"gai.lengthOfJsonArray": "JSON配列[JSON]の長さ"
};
var translations = {
	en: en,
	ja: ja,
	"ja-Hira": {
	"gai.name": "GAI",
	"gai.generate": "せいせい[PROMPT]",
	"gai.generateDefault": "AIとは?",
	"gai.costumeData": "コスチューム[COSTUME]の データ",
	"gai.backdropData": "はいけい[BACKDROP]の データ",
	"gai.snapshotData": "スナップショット の データ",
	"gai.soundData": "おと[SOUND]の データ",
	"gai.startListening": "ききとり かいし",
	"gai.stopListening": "ききとり しゅうりょう",
	"gai.listenedData": "ききとった データ",
	"gai.chat": "たいわ[PROMPT]",
	"gai.chatDefault": "こんにちはジェミニ！",
	"gai.chatHistory": "たいわ の きろく",
	"gai.startChat": "[HISTORY]に つづけて たいわ を はじめる",
	"gai.embeddingFor": "[CONTENT]の[TASK_TYPE]の うめこみひょうげん",
	"gai.embeddingTaskTypeMenu.retrievalQuery": "けんさく の しつもん として",
	"gai.embeddingTaskTypeMenu.retrievalDocument": "けんさく される ぶんしょ として",
	"gai.embeddingTaskTypeMenu.semanticSimilarity": "にた いみ を さがす ため",
	"gai.embeddingTaskTypeMenu.classification": "ぶんるい の ため",
	"gai.embeddingTaskTypeMenu.clustering": "クラスタリング の ため",
	"gai.embeddingTaskTypeMenu.questionAnswering": "しつもん に こたえる ため",
	"gai.embeddingTaskTypeMenu.factVerification": "じじつ を かくにん する ため",
	"gai.embeddingTaskTypeMenu.codeRetrievalQuery": "コードけんさく の しつもん として",
	"gai.embeddingDistanceOf": "[VECTOR_A]と[VECTOR_B]の[METRIC]",
	"gai.distanceMetricMenu.dotProduct": "ないせき",
	"gai.distanceMetricMenu.euclidean": "ユークリッド きょり",
	"gai.whenResponseReceived": "かいとう を うけとった とき",
	"gai.responseText": "かいとう[CANDIDATE_INDEX]",
	"gai.responseSafetyRating": "かいとう[CANDIDATE_INDEX]の[HARM_CATEGORY]の レベル",
	"gai.setSafetyRating": "[HARM_CATEGORY]の[BLOCK_THRESHOLD]",
	"gai.whenPartialResponseReceived": "かいとう の いちぶ を うけとった とき",
	"gai.partialResponseText": "かいとう の いちぶ",
	"gai.setGenerativeModel": "せいせい の モデル に[MODEL_CODE]を つかう",
	"gai.getGenerativeModel": "せいせい の モデル",
	"gai.setEmbeddingModel": "うめこみひょうげん の モデル に[MODEL_CODE]を つかう",
	"gai.getEmbeddingModel": "うめこみひょうげん の モデル",
	"gai.setGenerationConfig": "せいせい の[CONFIG]を[VALUE]に する",
	"gai.generationConfigMenu.maxOutputTokens": "さいだいトークンすう",
	"gai.generationConfigMenu.candidateCount": "かいとうこうほ の かず",
	"gai.generationConfigMenu.stopSequences": "ストップシーケンス",
	"gai.generationConfigMenu.temperature": "おんど",
	"gai.generationConfigMenu.topP": "トップP",
	"gai.generationConfigMenu.topK": "トップK",
	"gai.generationConfigMenu.systemInstruction": "システム インストラクション",
	"gai.generationConfigMenu.responseSchema": "レスポンス スキーマ",
	"gai.generationConfig": "せいせい の[CONFIG]",
	"gai.setFunctionCallingMode": "かんすう よびだし を[MODE]",
	"gai.returnResultToAI": "AI に けっか[RESULT]を かえす",
	"gai.functionCallingModeMenu.auto": "つかう",
	"gai.functionCallingModeMenu.any": "いつもつかう",
	"gai.functionCallingModeMenu.none": "つかわない",
	"gai.countTokensAs": "[REQUEST_TYPE][CONTENT]の トークンすう",
	"gai.countTokensRequestTypeMenu.generate": "せいせい",
	"gai.countTokensRequestTypeMenu.chat": "たいわ",
	"gai.getGenerativeModelID": "せいせい に つかえる モデル の[MODEL_INDEX]ばんめ の ID",
	"gai.getMaxGenerativeModelNumber": "せいせい に つかえる モデル の かず",
	"gai.getEmbeddingModelID": "うめこみ に つかえる モデル の[MODEL_INDEX]ばんめ の ID",
	"gai.getMaxEmbeddingModelNumber": "うめこみ に つかえる モデル の かず",
	"gai.harmCategoryMenu.hateSpeech": "ヘイトスピーチ",
	"gai.harmCategoryMenu.sexuallyExplicit": "ろこつな せいてき ひょうげん",
	"gai.harmCategoryMenu.harassment": "ハラスメント",
	"gai.harmCategoryMenu.dangerousContent": "きけんな ないよう",
	"gai.harmCategorySettingMenu.all": "すべて の きけんな ないよう",
	"gai.harmBlockThresholdMenu.unspecified": "せってい を しない",
	"gai.harmBlockThresholdMenu.blockMost": "ほとんど を ブロックする",
	"gai.harmBlockThresholdMenu.blockSome": "いちぶ を ブロックする",
	"gai.harmBlockThresholdMenu.blockFew": "すこし を ブロックする",
	"gai.harmBlockThresholdMenu.blockNone": "ブロック を しない",
	"gai.askApiKey": "APIキー を きく",
	"gai.setApiKey": "APIキー を[KEY]に する",
	"gai.apiKey": "APIキー",
	"gai.apiKeyDialog.message": "APIキー を せってい してください",
	"gai.apiKeyDialog.howToGetApiKey": "APIキー を しゅとく",
	"gai.apiKeyDialog.cancel": "キャンセル",
	"gai.apiKeyDialog.set": "せってい",
	"gai.setBaseUrl": "ベースURL を[URL]に する",
	"gai.baseUrl": "ベースURL",
	"gai.getValueFromJson": "JSON [JSON]から[PATH]を しゅとく",
	"gai.getItemOfJsonArray": "JSONはいれつ[JSON]の[INDEX]ばんめ",
	"gai.lengthOfJsonArray": "JSONはいれつ[JSON]の ながさ"
}
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAABZlJREFUWIXNmE1IXFcUgL878X+ciraKaSsGHR21qU1MNAjB0BT8SxtJViELF2aRkGCwi5DQhW4MgSxKoRSEdlHaQiAp1MYWUaukKNi0jjFKiqbgFAohEqP1b8afcU4X773pczK/2jQ5cGHefefc+e6595x37lUiwssslhcNEEn8gEqpHKXUuFLqvRcJpLO8Yfz2A4rIX8A68JNSqlMplfsCwN5RSv0K9Po7RcTfgDJgzWq1bgArwMdAmlnneTSgBPhBKbWqlBKg2v8uiHJfWlraZmFhoQBuYAH4EEh5DmDFQCfgttlsXqvV6gV6tugEMSoDVux2u9TX1wsgwLIO2ga8tkMoC/A+MKg7wJufny/79+83HFIUFlAfpB/YPH78uLS2thqQoi+7B+gCqoG4KKEUcAj4FHgKLBpj1tTUSGNjowBrwNeBtipYHlRKHQR+BlKuXbtGdnY258+fx+Px+LcusATEAUPA98AfgAtYBV4FsoBSoBao0CGTdRssFguXLl0iJSWFtrY2dO8ViMijLTBhZj0BSHx8vIyMjMjY2JjY7XazN83NDczrnlkG/tafV4Pp5+TkyMDAgNy8eVP0oFgFPgnKEQaw0ViK4uJicbvdsrCwIOfOnTMGjblZLBY5c+aMzM/Py+TkpNhsNvMEX48VMEnfcwLIlStXxJDBwUEpKSmJCa6qqkqcTqeIiLjdbtm7d6/xbgP4JiRHhM39LeADJCkpSVwulx/S6/XKrVu3pKKiIiTUrl27pLa2Vrq7u8Usly9fNustAftCMQQNEkOUUg3AV8ArAKdOneLGjRvP6I2MjNDb28vU1BRra2vs3r2bsrIyampqyMrK2qJ7//59ysvL2djYMLpcIpIXEiKCB5PRwl8AUUrJxMSE7EQqKysD01ZLWIZwL3XI383Ldvbs2W3D9ff3B26DFSBvp4CfAZvGoOnp6bK2trYtwLq6ukDARxH/PwrAJrTc5h94aGgoZrjp6elg6Slk9BotmoJ1FvCaO5xOZxRmW6Wvr8+YsCFe4EEku2gAn6LN1i8zMzMxwQE8fPgwsMsD/BnJLhrApMCOxMTEqKDMYkorhvjQCuSwEg3gHiDe3OFwOKLl8ktmZmZgVxyQEckuGsAitHyojRoXx9GjR2OCAzhw4EBgVyJRAEYTxZOYIu/06dOx5xcR8Xg8kp6eHhjF30X8/whwGQSUTHfv3t0WoIjIhQsXAgEf7xTQX3KhV787kdHR0UDAVSAzHEOkYuEesA8gOTmZ8fFx7Hb7Fp3Z2Vl6e3txOp08efKEhIQEioqKqK6uprS09JkxGxoauH37tvG4DDSLyJcx70GgEK2QFECuXr26xRs9PT1SX18vcXFxIcutw4cPS2dnp2xubvrtpqamJD4+3qx3Z1tLDHSgVzLl5eWyvr7uX6YjR47EVKyWlpbK8PCwH7KlpSVwmUOevcMFxwogGRkZ4nK5ZG5uTpqamsRisWy73G9ubpbFxUVZWlqSgoICc0XTHCtgO+BWSklXV5cMDAxITk5OJAgv/x5LQ+o5HA6ZmJiQ4eFh8/ZwRR0kSqksYBqwtre3s7y8zPXr1/H5fGY1D9qnSgFjwG/ADDCHloDzgbfQzsI+tM9lgmFstVrp6OjA5XLR2toKWrB8ICJ3CJQg3vscWD1x4oRUV1ebZ+/WwcbQrkIKw21ufSwLcFBfkRm0lOWvLS9evCgnT54UfRK/RFxioABwOxwOyc3NNcAWgcfAR0B2JKgwsAp4F/hRn+w6IMeOHZO8vDzRvVgZCbA7NTV1w2az+XSDe0A9YNkuWAjYPOALAzQ3N1dSU1N9wM8hAdHuWoywHwKq/kuoEKB70I627pSUlE19C5WHAnwAjAKHnjdYENC3gQH9SOAMBfjm/w0WBLQO7U4ox+gL+y1+GeSlv+X/B4bYrjXAURHDAAAAAElFTkSuQmCC";

/**
 * Whether debug mode is enabled.
 * @type {boolean}
 */
var DEBUG;

/**
 * Check if debug mode is enabled.
 * @returns {boolean} - true if debug mode is enabled.
 */
var checkDebugMode = function checkDebugMode() {
  if (typeof DEBUG !== 'undefined') {
    return DEBUG;
  }
  try {
    var urlParams = new URLSearchParams(window.location.href.split('?')[1].toLowerCase());
    if (urlParams.get('debug') === 'true' || urlParams.get('debug') === '') {
      DEBUG = true;
    } else {
      DEBUG = false;
    }
  } catch (error) {
    // ignore
  }
  return DEBUG;
};

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}

function _defineProperty(e, r, t) {
  return (r = toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

var regeneratorRuntime$1 = {exports: {}};

var OverloadYield = {exports: {}};

var hasRequiredOverloadYield;

function requireOverloadYield () {
	if (hasRequiredOverloadYield) return OverloadYield.exports;
	hasRequiredOverloadYield = 1;
	(function (module) {
		function _OverloadYield(e, d) {
		  this.v = e, this.k = d;
		}
		module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (OverloadYield));
	return OverloadYield.exports;
}

var regenerator$1 = {exports: {}};

var regeneratorDefine = {exports: {}};

var hasRequiredRegeneratorDefine;

function requireRegeneratorDefine () {
	if (hasRequiredRegeneratorDefine) return regeneratorDefine.exports;
	hasRequiredRegeneratorDefine = 1;
	(function (module) {
		function _regeneratorDefine(e, r, n, t) {
		  var i = Object.defineProperty;
		  try {
		    i({}, "", {});
		  } catch (e) {
		    i = 0;
		  }
		  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
		    function o(r, n) {
		      _regeneratorDefine(e, r, function (e) {
		        return this._invoke(r, n, e);
		      });
		    }
		    r ? i ? i(e, r, {
		      value: n,
		      enumerable: !t,
		      configurable: !t,
		      writable: !t
		    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
		}
		module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorDefine));
	return regeneratorDefine.exports;
}

var hasRequiredRegenerator$1;

function requireRegenerator$1 () {
	if (hasRequiredRegenerator$1) return regenerator$1.exports;
	hasRequiredRegenerator$1 = 1;
	(function (module) {
		var regeneratorDefine = requireRegeneratorDefine();
		function _regenerator() {
		  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
		  var e,
		    t,
		    r = "function" == typeof Symbol ? Symbol : {},
		    n = r.iterator || "@@iterator",
		    o = r.toStringTag || "@@toStringTag";
		  function i(r, n, o, i) {
		    var c = n && n.prototype instanceof Generator ? n : Generator,
		      u = Object.create(c.prototype);
		    return regeneratorDefine(u, "_invoke", function (r, n, o) {
		      var i,
		        c,
		        u,
		        f = 0,
		        p = o || [],
		        y = !1,
		        G = {
		          p: 0,
		          n: 0,
		          v: e,
		          a: d,
		          f: d.bind(e, 4),
		          d: function d(t, r) {
		            return i = t, c = 0, u = e, G.n = r, a;
		          }
		        };
		      function d(r, n) {
		        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
		          var o,
		            i = p[t],
		            d = G.p,
		            l = i[2];
		          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
		        }
		        if (o || r > 1) return a;
		        throw y = !0, n;
		      }
		      return function (o, p, l) {
		        if (f > 1) throw TypeError("Generator is already running");
		        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
		          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
		          try {
		            if (f = 2, i) {
		              if (c || (o = "next"), t = i[o]) {
		                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
		                if (!t.done) return t;
		                u = t.value, c < 2 && (c = 0);
		              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
		              i = e;
		            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
		          } catch (t) {
		            i = e, c = 1, u = t;
		          } finally {
		            f = 1;
		          }
		        }
		        return {
		          value: t,
		          done: y
		        };
		      };
		    }(r, o, i), !0), u;
		  }
		  var a = {};
		  function Generator() {}
		  function GeneratorFunction() {}
		  function GeneratorFunctionPrototype() {}
		  t = Object.getPrototypeOf;
		  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
		      return this;
		    }), t),
		    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
		  function f(e) {
		    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
		  }
		  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
		    return this;
		  }), regeneratorDefine(u, "toString", function () {
		    return "[object Generator]";
		  }), (module.exports = _regenerator = function _regenerator() {
		    return {
		      w: i,
		      m: f
		    };
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
		}
		module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regenerator$1));
	return regenerator$1.exports;
}

var regeneratorAsync = {exports: {}};

var regeneratorAsyncGen = {exports: {}};

var regeneratorAsyncIterator = {exports: {}};

var hasRequiredRegeneratorAsyncIterator;

function requireRegeneratorAsyncIterator () {
	if (hasRequiredRegeneratorAsyncIterator) return regeneratorAsyncIterator.exports;
	hasRequiredRegeneratorAsyncIterator = 1;
	(function (module) {
		var OverloadYield = requireOverloadYield();
		var regeneratorDefine = requireRegeneratorDefine();
		function AsyncIterator(t, e) {
		  function n(r, o, i, f) {
		    try {
		      var c = t[r](o),
		        u = c.value;
		      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
		        n("next", t, i, f);
		      }, function (t) {
		        n("throw", t, i, f);
		      }) : e.resolve(u).then(function (t) {
		        c.value = t, i(c);
		      }, function (t) {
		        return n("throw", t, i, f);
		      });
		    } catch (t) {
		      f(t);
		    }
		  }
		  var r;
		  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
		    return this;
		  })), regeneratorDefine(this, "_invoke", function (t, o, i) {
		    function f() {
		      return new e(function (e, r) {
		        n(t, i, e, r);
		      });
		    }
		    return r = r ? r.then(f, f) : f();
		  }, !0);
		}
		module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorAsyncIterator));
	return regeneratorAsyncIterator.exports;
}

var hasRequiredRegeneratorAsyncGen;

function requireRegeneratorAsyncGen () {
	if (hasRequiredRegeneratorAsyncGen) return regeneratorAsyncGen.exports;
	hasRequiredRegeneratorAsyncGen = 1;
	(function (module) {
		var regenerator = requireRegenerator$1();
		var regeneratorAsyncIterator = requireRegeneratorAsyncIterator();
		function _regeneratorAsyncGen(r, e, t, o, n) {
		  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
		}
		module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorAsyncGen));
	return regeneratorAsyncGen.exports;
}

var hasRequiredRegeneratorAsync;

function requireRegeneratorAsync () {
	if (hasRequiredRegeneratorAsync) return regeneratorAsync.exports;
	hasRequiredRegeneratorAsync = 1;
	(function (module) {
		var regeneratorAsyncGen = requireRegeneratorAsyncGen();
		function _regeneratorAsync(n, e, r, t, o) {
		  var a = regeneratorAsyncGen(n, e, r, t, o);
		  return a.next().then(function (n) {
		    return n.done ? n.value : a.next();
		  });
		}
		module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorAsync));
	return regeneratorAsync.exports;
}

var regeneratorKeys = {exports: {}};

var hasRequiredRegeneratorKeys;

function requireRegeneratorKeys () {
	if (hasRequiredRegeneratorKeys) return regeneratorKeys.exports;
	hasRequiredRegeneratorKeys = 1;
	(function (module) {
		function _regeneratorKeys(e) {
		  var n = Object(e),
		    r = [];
		  for (var t in n) r.unshift(t);
		  return function e() {
		    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
		    return e.done = !0, e;
		  };
		}
		module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorKeys));
	return regeneratorKeys.exports;
}

var regeneratorValues = {exports: {}};

var _typeof = {exports: {}};

var hasRequired_typeof;

function require_typeof () {
	if (hasRequired_typeof) return _typeof.exports;
	hasRequired_typeof = 1;
	(function (module) {
		function _typeof(o) {
		  "@babel/helpers - typeof";

		  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
		    return typeof o;
		  } : function (o) {
		    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
		}
		module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (_typeof));
	return _typeof.exports;
}

var hasRequiredRegeneratorValues;

function requireRegeneratorValues () {
	if (hasRequiredRegeneratorValues) return regeneratorValues.exports;
	hasRequiredRegeneratorValues = 1;
	(function (module) {
		var _typeof = require_typeof()["default"];
		function _regeneratorValues(e) {
		  if (null != e) {
		    var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
		      r = 0;
		    if (t) return t.call(e);
		    if ("function" == typeof e.next) return e;
		    if (!isNaN(e.length)) return {
		      next: function next() {
		        return e && r >= e.length && (e = void 0), {
		          value: e && e[r++],
		          done: !e
		        };
		      }
		    };
		  }
		  throw new TypeError(_typeof(e) + " is not iterable");
		}
		module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorValues));
	return regeneratorValues.exports;
}

var hasRequiredRegeneratorRuntime;

function requireRegeneratorRuntime () {
	if (hasRequiredRegeneratorRuntime) return regeneratorRuntime$1.exports;
	hasRequiredRegeneratorRuntime = 1;
	(function (module) {
		var OverloadYield = requireOverloadYield();
		var regenerator = requireRegenerator$1();
		var regeneratorAsync = requireRegeneratorAsync();
		var regeneratorAsyncGen = requireRegeneratorAsyncGen();
		var regeneratorAsyncIterator = requireRegeneratorAsyncIterator();
		var regeneratorKeys = requireRegeneratorKeys();
		var regeneratorValues = requireRegeneratorValues();
		function _regeneratorRuntime() {

		  var r = regenerator(),
		    e = r.m(_regeneratorRuntime),
		    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
		  function n(r) {
		    var e = "function" == typeof r && r.constructor;
		    return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
		  }
		  var o = {
		    "throw": 1,
		    "return": 2,
		    "break": 3,
		    "continue": 3
		  };
		  function a(r) {
		    var e, t;
		    return function (n) {
		      e || (e = {
		        stop: function stop() {
		          return t(n.a, 2);
		        },
		        "catch": function _catch() {
		          return n.v;
		        },
		        abrupt: function abrupt(r, e) {
		          return t(n.a, o[r], e);
		        },
		        delegateYield: function delegateYield(r, o, a) {
		          return e.resultName = o, t(n.d, regeneratorValues(r), a);
		        },
		        finish: function finish(r) {
		          return t(n.f, r);
		        }
		      }, t = function t(r, _t, o) {
		        n.p = e.prev, n.n = e.next;
		        try {
		          return r(_t, o);
		        } finally {
		          e.next = n.n;
		        }
		      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
		      try {
		        return r.call(this, e);
		      } finally {
		        n.p = e.prev, n.n = e.next;
		      }
		    };
		  }
		  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
		    return {
		      wrap: function wrap(e, t, n, o) {
		        return r.w(a(e), t, n, o && o.reverse());
		      },
		      isGeneratorFunction: n,
		      mark: r.m,
		      awrap: function awrap(r, e) {
		        return new OverloadYield(r, e);
		      },
		      AsyncIterator: regeneratorAsyncIterator,
		      async: function async(r, e, t, o, u) {
		        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
		      },
		      keys: regeneratorKeys,
		      values: regeneratorValues
		    };
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
		}
		module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (regeneratorRuntime$1));
	return regeneratorRuntime$1.exports;
}

var regenerator;
var hasRequiredRegenerator;

function requireRegenerator () {
	if (hasRequiredRegenerator) return regenerator;
	hasRequiredRegenerator = 1;
	// TODO(Babel 8): Remove this file.

	var runtime = requireRegeneratorRuntime()();
	regenerator = runtime;

	// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
	return regenerator;
}

var regeneratorExports = requireRegenerator();
var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regeneratorExports);

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let _defaultBaseGeminiUrl = undefined;
let _defaultBaseVertexUrl = undefined;
/**
 * Returns the default base URLs for the Gemini API and Vertex AI API.
 */
function getDefaultBaseUrls() {
    return {
        geminiUrl: _defaultBaseGeminiUrl,
        vertexUrl: _defaultBaseVertexUrl,
    };
}
/**
 * Returns the default base URL based on the following priority:
 *   1. Base URLs set via HttpOptions.
 *   2. Base URLs set via the latest call to setDefaultBaseUrls.
 *   3. Base URLs set via environment variables.
 */
function getBaseUrl(options, vertexBaseUrlFromEnv, geminiBaseUrlFromEnv) {
    var _a, _b, _c;
    if (!((_a = options.httpOptions) === null || _a === void 0 ? void 0 : _a.baseUrl)) {
        const defaultBaseUrls = getDefaultBaseUrls();
        if (options.vertexai) {
            return (_b = defaultBaseUrls.vertexUrl) !== null && _b !== void 0 ? _b : vertexBaseUrlFromEnv;
        }
        else {
            return (_c = defaultBaseUrls.geminiUrl) !== null && _c !== void 0 ? _c : geminiBaseUrlFromEnv;
        }
    }
    return options.httpOptions.baseUrl;
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class BaseModule {
}
function formatMap(templateString, valueMap) {
    // Use a regular expression to find all placeholders in the template string
    const regex = /\{([^}]+)\}/g;
    // Replace each placeholder with its corresponding value from the valueMap
    return templateString.replace(regex, (match, key) => {
        if (Object.prototype.hasOwnProperty.call(valueMap, key)) {
            const value = valueMap[key];
            // Convert the value to a string if it's not a string already
            return value !== undefined && value !== null ? String(value) : '';
        }
        else {
            // Handle missing keys
            throw new Error(`Key '${key}' not found in valueMap.`);
        }
    });
}
function setValueByPath(data, keys, value) {
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (key.endsWith('[]')) {
            const keyName = key.slice(0, -2);
            if (!(keyName in data)) {
                if (Array.isArray(value)) {
                    data[keyName] = Array.from({ length: value.length }, () => ({}));
                }
                else {
                    throw new Error(`Value must be a list given an array path ${key}`);
                }
            }
            if (Array.isArray(data[keyName])) {
                const arrayData = data[keyName];
                if (Array.isArray(value)) {
                    for (let j = 0; j < arrayData.length; j++) {
                        const entry = arrayData[j];
                        setValueByPath(entry, keys.slice(i + 1), value[j]);
                    }
                }
                else {
                    for (const d of arrayData) {
                        setValueByPath(d, keys.slice(i + 1), value);
                    }
                }
            }
            return;
        }
        else if (key.endsWith('[0]')) {
            const keyName = key.slice(0, -3);
            if (!(keyName in data)) {
                data[keyName] = [{}];
            }
            const arrayData = data[keyName];
            setValueByPath(arrayData[0], keys.slice(i + 1), value);
            return;
        }
        if (!data[key] || typeof data[key] !== 'object') {
            data[key] = {};
        }
        data = data[key];
    }
    const keyToSet = keys[keys.length - 1];
    const existingData = data[keyToSet];
    if (existingData !== undefined) {
        if (!value ||
            (typeof value === 'object' && Object.keys(value).length === 0)) {
            return;
        }
        if (value === existingData) {
            return;
        }
        if (typeof existingData === 'object' &&
            typeof value === 'object' &&
            existingData !== null &&
            value !== null) {
            Object.assign(existingData, value);
        }
        else {
            throw new Error(`Cannot set value for an existing key. Key: ${keyToSet}`);
        }
    }
    else {
        data[keyToSet] = value;
    }
}
function getValueByPath(data, keys) {
    try {
        if (keys.length === 1 && keys[0] === '_self') {
            return data;
        }
        for (let i = 0; i < keys.length; i++) {
            if (typeof data !== 'object' || data === null) {
                return undefined;
            }
            const key = keys[i];
            if (key.endsWith('[]')) {
                const keyName = key.slice(0, -2);
                if (keyName in data) {
                    const arrayData = data[keyName];
                    if (!Array.isArray(arrayData)) {
                        return undefined;
                    }
                    return arrayData.map((d) => getValueByPath(d, keys.slice(i + 1)));
                }
                else {
                    return undefined;
                }
            }
            else {
                data = data[key];
            }
        }
        return data;
    }
    catch (error) {
        if (error instanceof TypeError) {
            return undefined;
        }
        throw error;
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function tModel(apiClient, model) {
    if (!model || typeof model !== 'string') {
        throw new Error('model is required and must be a string');
    }
    if (apiClient.isVertexAI()) {
        if (model.startsWith('publishers/') ||
            model.startsWith('projects/') ||
            model.startsWith('models/')) {
            return model;
        }
        else if (model.indexOf('/') >= 0) {
            const parts = model.split('/', 2);
            return `publishers/${parts[0]}/models/${parts[1]}`;
        }
        else {
            return `publishers/google/models/${model}`;
        }
    }
    else {
        if (model.startsWith('models/') || model.startsWith('tunedModels/')) {
            return model;
        }
        else {
            return `models/${model}`;
        }
    }
}
function tCachesModel(apiClient, model) {
    const transformedModel = tModel(apiClient, model);
    if (!transformedModel) {
        return '';
    }
    if (transformedModel.startsWith('publishers/') && apiClient.isVertexAI()) {
        // vertex caches only support model name start with projects.
        return `projects/${apiClient.getProject()}/locations/${apiClient.getLocation()}/${transformedModel}`;
    }
    else if (transformedModel.startsWith('models/') && apiClient.isVertexAI()) {
        return `projects/${apiClient.getProject()}/locations/${apiClient.getLocation()}/publishers/google/${transformedModel}`;
    }
    else {
        return transformedModel;
    }
}
function tBlobs(apiClient, blobs) {
    if (Array.isArray(blobs)) {
        return blobs.map((blob) => tBlob(apiClient, blob));
    }
    else {
        return [tBlob(apiClient, blobs)];
    }
}
function tBlob(apiClient, blob) {
    if (typeof blob === 'object' && blob !== null) {
        return blob;
    }
    throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof blob}`);
}
function tImageBlob(apiClient, blob) {
    const transformedBlob = tBlob(apiClient, blob);
    if (transformedBlob.mimeType &&
        transformedBlob.mimeType.startsWith('image/')) {
        return transformedBlob;
    }
    throw new Error(`Unsupported mime type: ${transformedBlob.mimeType}`);
}
function tAudioBlob(apiClient, blob) {
    const transformedBlob = tBlob(apiClient, blob);
    if (transformedBlob.mimeType &&
        transformedBlob.mimeType.startsWith('audio/')) {
        return transformedBlob;
    }
    throw new Error(`Unsupported mime type: ${transformedBlob.mimeType}`);
}
function tPart(apiClient, origin) {
    if (origin === null || origin === undefined) {
        throw new Error('PartUnion is required');
    }
    if (typeof origin === 'object') {
        return origin;
    }
    if (typeof origin === 'string') {
        return { text: origin };
    }
    throw new Error(`Unsupported part type: ${typeof origin}`);
}
function tParts(apiClient, origin) {
    if (origin === null ||
        origin === undefined ||
        (Array.isArray(origin) && origin.length === 0)) {
        throw new Error('PartListUnion is required');
    }
    if (Array.isArray(origin)) {
        return origin.map((item) => tPart(apiClient, item));
    }
    return [tPart(apiClient, origin)];
}
function _isContent(origin) {
    return (origin !== null &&
        origin !== undefined &&
        typeof origin === 'object' &&
        'parts' in origin &&
        Array.isArray(origin.parts));
}
function _isFunctionCallPart(origin) {
    return (origin !== null &&
        origin !== undefined &&
        typeof origin === 'object' &&
        'functionCall' in origin);
}
function _isFunctionResponsePart(origin) {
    return (origin !== null &&
        origin !== undefined &&
        typeof origin === 'object' &&
        'functionResponse' in origin);
}
function tContent(apiClient, origin) {
    if (origin === null || origin === undefined) {
        throw new Error('ContentUnion is required');
    }
    if (_isContent(origin)) {
        // _isContent is a utility function that checks if the
        // origin is a Content.
        return origin;
    }
    return {
        role: 'user',
        parts: tParts(apiClient, origin),
    };
}
function tContentsForEmbed(apiClient, origin) {
    if (!origin) {
        return [];
    }
    if (apiClient.isVertexAI() && Array.isArray(origin)) {
        return origin.flatMap((item) => {
            const content = tContent(apiClient, item);
            if (content.parts &&
                content.parts.length > 0 &&
                content.parts[0].text !== undefined) {
                return [content.parts[0].text];
            }
            return [];
        });
    }
    else if (apiClient.isVertexAI()) {
        const content = tContent(apiClient, origin);
        if (content.parts &&
            content.parts.length > 0 &&
            content.parts[0].text !== undefined) {
            return [content.parts[0].text];
        }
        return [];
    }
    if (Array.isArray(origin)) {
        return origin.map((item) => tContent(apiClient, item));
    }
    return [tContent(apiClient, origin)];
}
function tContents(apiClient, origin) {
    if (origin === null ||
        origin === undefined ||
        (Array.isArray(origin) && origin.length === 0)) {
        throw new Error('contents are required');
    }
    if (!Array.isArray(origin)) {
        // If it's not an array, it's a single content or a single PartUnion.
        if (_isFunctionCallPart(origin) || _isFunctionResponsePart(origin)) {
            throw new Error('To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them');
        }
        return [tContent(apiClient, origin)];
    }
    const result = [];
    const accumulatedParts = [];
    const isContentArray = _isContent(origin[0]);
    for (const item of origin) {
        const isContent = _isContent(item);
        if (isContent != isContentArray) {
            throw new Error('Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them');
        }
        if (isContent) {
            // `isContent` contains the result of _isContent, which is a utility
            // function that checks if the item is a Content.
            result.push(item);
        }
        else if (_isFunctionCallPart(item) || _isFunctionResponsePart(item)) {
            throw new Error('To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them');
        }
        else {
            accumulatedParts.push(item);
        }
    }
    if (!isContentArray) {
        result.push({ role: 'user', parts: tParts(apiClient, accumulatedParts) });
    }
    return result;
}
function tSchema(apiClient, schema) {
    return schema;
}
function tSpeechConfig(apiClient, speechConfig) {
    if (typeof speechConfig === 'object') {
        return speechConfig;
    }
    else if (typeof speechConfig === 'string') {
        return {
            voiceConfig: {
                prebuiltVoiceConfig: {
                    voiceName: speechConfig,
                },
            },
        };
    }
    else {
        throw new Error(`Unsupported speechConfig type: ${typeof speechConfig}`);
    }
}
function tTool(apiClient, tool) {
    return tool;
}
function tTools(apiClient, tool) {
    if (!Array.isArray(tool)) {
        throw new Error('tool is required and must be an array of Tools');
    }
    return tool;
}
/**
 * Prepends resource name with project, location, resource_prefix if needed.
 *
 * @param client The API client.
 * @param resourceName The resource name.
 * @param resourcePrefix The resource prefix.
 * @param splitsAfterPrefix The number of splits after the prefix.
 * @returns The completed resource name.
 *
 * Examples:
 *
 * ```
 * resource_name = '123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = True
 * client.project = 'bar'
 * client.location = 'us-west1'
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * returns: 'projects/bar/locations/us-west1/cachedContents/123'
 * ```
 *
 * ```
 * resource_name = 'projects/foo/locations/us-central1/cachedContents/123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = True
 * client.project = 'bar'
 * client.location = 'us-west1'
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * returns: 'projects/foo/locations/us-central1/cachedContents/123'
 * ```
 *
 * ```
 * resource_name = '123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = False
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * returns 'cachedContents/123'
 * ```
 *
 * ```
 * resource_name = 'some/wrong/cachedContents/resource/name/123'
 * resource_prefix = 'cachedContents'
 * splits_after_prefix = 1
 * client.vertexai = False
 * # client.vertexai = True
 * _resource_name(client, resource_name, resource_prefix, splits_after_prefix)
 * -> 'some/wrong/resource/name/123'
 * ```
 */
function resourceName(client, resourceName, resourcePrefix, splitsAfterPrefix = 1) {
    const shouldAppendPrefix = !resourceName.startsWith(`${resourcePrefix}/`) &&
        resourceName.split('/').length === splitsAfterPrefix;
    if (client.isVertexAI()) {
        if (resourceName.startsWith('projects/')) {
            return resourceName;
        }
        else if (resourceName.startsWith('locations/')) {
            return `projects/${client.getProject()}/${resourceName}`;
        }
        else if (resourceName.startsWith(`${resourcePrefix}/`)) {
            return `projects/${client.getProject()}/locations/${client.getLocation()}/${resourceName}`;
        }
        else if (shouldAppendPrefix) {
            return `projects/${client.getProject()}/locations/${client.getLocation()}/${resourcePrefix}/${resourceName}`;
        }
        else {
            return resourceName;
        }
    }
    if (shouldAppendPrefix) {
        return `${resourcePrefix}/${resourceName}`;
    }
    return resourceName;
}
function tCachedContentName(apiClient, name) {
    if (typeof name !== 'string') {
        throw new Error('name must be a string');
    }
    return resourceName(apiClient, name, 'cachedContents');
}
function tTuningJobStatus(apiClient, status) {
    switch (status) {
        case 'STATE_UNSPECIFIED':
            return 'JOB_STATE_UNSPECIFIED';
        case 'CREATING':
            return 'JOB_STATE_RUNNING';
        case 'ACTIVE':
            return 'JOB_STATE_SUCCEEDED';
        case 'FAILED':
            return 'JOB_STATE_FAILED';
        default:
            return status;
    }
}
function tBytes(apiClient, fromImageBytes) {
    if (typeof fromImageBytes !== 'string') {
        throw new Error('fromImageBytes must be a string');
    }
    // TODO(b/389133914): Remove dummy bytes converter.
    return fromImageBytes;
}
function _isFile(origin) {
    return (origin !== null &&
        origin !== undefined &&
        typeof origin === 'object' &&
        'name' in origin);
}
function isGeneratedVideo(origin) {
    return (origin !== null &&
        origin !== undefined &&
        typeof origin === 'object' &&
        'video' in origin);
}
function isVideo(origin) {
    return (origin !== null &&
        origin !== undefined &&
        typeof origin === 'object' &&
        'uri' in origin);
}
function tFileName(apiClient, fromName) {
    var _a;
    let name;
    if (_isFile(fromName)) {
        name = fromName.name;
    }
    if (isVideo(fromName)) {
        name = fromName.uri;
        if (name === undefined) {
            return undefined;
        }
    }
    if (isGeneratedVideo(fromName)) {
        name = (_a = fromName.video) === null || _a === void 0 ? void 0 : _a.uri;
        if (name === undefined) {
            return undefined;
        }
    }
    if (typeof fromName === 'string') {
        name = fromName;
    }
    if (name === undefined) {
        throw new Error('Could not extract file name from the provided input.');
    }
    if (name.startsWith('https://')) {
        const suffix = name.split('files/')[1];
        const match = suffix.match(/[a-z0-9]+/);
        if (match === null) {
            throw new Error(`Could not extract file name from URI ${name}`);
        }
        name = match[0];
    }
    else if (name.startsWith('files/')) {
        name = name.split('files/')[1];
    }
    return name;
}
function tModelsUrl(apiClient, baseModels) {
    let res;
    if (apiClient.isVertexAI()) {
        res = baseModels ? 'publishers/google/models' : 'models';
    }
    else {
        res = baseModels ? 'models' : 'tunedModels';
    }
    return res;
}
function tExtractModels(apiClient, response) {
    for (const key of ['models', 'tunedModels', 'publisherModels']) {
        if (hasField(response, key)) {
            return response[key];
        }
    }
    return [];
}
function hasField(data, fieldName) {
    return data !== null && typeof data === 'object' && fieldName in data;
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function partToMldev$2(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['videoMetadata']) !== undefined) {
        throw new Error('videoMetadata parameter is not supported in Gemini API.');
    }
    const fromThought = getValueByPath(fromObject, ['thought']);
    if (fromThought != null) {
        setValueByPath(toObject, ['thought'], fromThought);
    }
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult',
    ]);
    if (fromCodeExecutionResult != null) {
        setValueByPath(toObject, ['codeExecutionResult'], fromCodeExecutionResult);
    }
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode',
    ]);
    if (fromExecutableCode != null) {
        setValueByPath(toObject, ['executableCode'], fromExecutableCode);
    }
    const fromFileData = getValueByPath(fromObject, ['fileData']);
    if (fromFileData != null) {
        setValueByPath(toObject, ['fileData'], fromFileData);
    }
    const fromFunctionCall = getValueByPath(fromObject, ['functionCall']);
    if (fromFunctionCall != null) {
        setValueByPath(toObject, ['functionCall'], fromFunctionCall);
    }
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse',
    ]);
    if (fromFunctionResponse != null) {
        setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
    }
    const fromInlineData = getValueByPath(fromObject, ['inlineData']);
    if (fromInlineData != null) {
        setValueByPath(toObject, ['inlineData'], fromInlineData);
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    return toObject;
}
function contentToMldev$2(apiClient, fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, ['parts']);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return partToMldev$2(apiClient, item);
            });
        }
        setValueByPath(toObject, ['parts'], transformedList);
    }
    const fromRole = getValueByPath(fromObject, ['role']);
    if (fromRole != null) {
        setValueByPath(toObject, ['role'], fromRole);
    }
    return toObject;
}
function googleSearchToMldev$2() {
    const toObject = {};
    return toObject;
}
function dynamicRetrievalConfigToMldev$2(apiClient, fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, ['mode']);
    if (fromMode != null) {
        setValueByPath(toObject, ['mode'], fromMode);
    }
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold',
    ]);
    if (fromDynamicThreshold != null) {
        setValueByPath(toObject, ['dynamicThreshold'], fromDynamicThreshold);
    }
    return toObject;
}
function googleSearchRetrievalToMldev$2(apiClient, fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig',
    ]);
    if (fromDynamicRetrievalConfig != null) {
        setValueByPath(toObject, ['dynamicRetrievalConfig'], dynamicRetrievalConfigToMldev$2(apiClient, fromDynamicRetrievalConfig));
    }
    return toObject;
}
function toolToMldev$2(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['retrieval']) !== undefined) {
        throw new Error('retrieval parameter is not supported in Gemini API.');
    }
    const fromGoogleSearch = getValueByPath(fromObject, ['googleSearch']);
    if (fromGoogleSearch != null) {
        setValueByPath(toObject, ['googleSearch'], googleSearchToMldev$2());
    }
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval',
    ]);
    if (fromGoogleSearchRetrieval != null) {
        setValueByPath(toObject, ['googleSearchRetrieval'], googleSearchRetrievalToMldev$2(apiClient, fromGoogleSearchRetrieval));
    }
    if (getValueByPath(fromObject, ['enterpriseWebSearch']) !== undefined) {
        throw new Error('enterpriseWebSearch parameter is not supported in Gemini API.');
    }
    if (getValueByPath(fromObject, ['googleMaps']) !== undefined) {
        throw new Error('googleMaps parameter is not supported in Gemini API.');
    }
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution',
    ]);
    if (fromCodeExecution != null) {
        setValueByPath(toObject, ['codeExecution'], fromCodeExecution);
    }
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations',
    ]);
    if (fromFunctionDeclarations != null) {
        setValueByPath(toObject, ['functionDeclarations'], fromFunctionDeclarations);
    }
    return toObject;
}
function functionCallingConfigToMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, ['mode']);
    if (fromMode != null) {
        setValueByPath(toObject, ['mode'], fromMode);
    }
    const fromAllowedFunctionNames = getValueByPath(fromObject, [
        'allowedFunctionNames',
    ]);
    if (fromAllowedFunctionNames != null) {
        setValueByPath(toObject, ['allowedFunctionNames'], fromAllowedFunctionNames);
    }
    return toObject;
}
function toolConfigToMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromFunctionCallingConfig = getValueByPath(fromObject, [
        'functionCallingConfig',
    ]);
    if (fromFunctionCallingConfig != null) {
        setValueByPath(toObject, ['functionCallingConfig'], functionCallingConfigToMldev$1(apiClient, fromFunctionCallingConfig));
    }
    if (getValueByPath(fromObject, ['retrievalConfig']) !== undefined) {
        throw new Error('retrievalConfig parameter is not supported in Gemini API.');
    }
    return toObject;
}
function createCachedContentConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromTtl = getValueByPath(fromObject, ['ttl']);
    if (parentObject !== undefined && fromTtl != null) {
        setValueByPath(parentObject, ['ttl'], fromTtl);
    }
    const fromExpireTime = getValueByPath(fromObject, ['expireTime']);
    if (parentObject !== undefined && fromExpireTime != null) {
        setValueByPath(parentObject, ['expireTime'], fromExpireTime);
    }
    const fromDisplayName = getValueByPath(fromObject, ['displayName']);
    if (parentObject !== undefined && fromDisplayName != null) {
        setValueByPath(parentObject, ['displayName'], fromDisplayName);
    }
    const fromContents = getValueByPath(fromObject, ['contents']);
    if (parentObject !== undefined && fromContents != null) {
        let transformedList = tContents(apiClient, fromContents);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return contentToMldev$2(apiClient, item);
            });
        }
        setValueByPath(parentObject, ['contents'], transformedList);
    }
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction',
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) {
        setValueByPath(parentObject, ['systemInstruction'], contentToMldev$2(apiClient, tContent(apiClient, fromSystemInstruction)));
    }
    const fromTools = getValueByPath(fromObject, ['tools']);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = fromTools;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return toolToMldev$2(apiClient, item);
            });
        }
        setValueByPath(parentObject, ['tools'], transformedList);
    }
    const fromToolConfig = getValueByPath(fromObject, ['toolConfig']);
    if (parentObject !== undefined && fromToolConfig != null) {
        setValueByPath(parentObject, ['toolConfig'], toolConfigToMldev$1(apiClient, fromToolConfig));
    }
    return toObject;
}
function createCachedContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['model'], tCachesModel(apiClient, fromModel));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], createCachedContentConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function getCachedContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['_url', 'name'], tCachedContentName(apiClient, fromName));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function deleteCachedContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['_url', 'name'], tCachedContentName(apiClient, fromName));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function updateCachedContentConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromTtl = getValueByPath(fromObject, ['ttl']);
    if (parentObject !== undefined && fromTtl != null) {
        setValueByPath(parentObject, ['ttl'], fromTtl);
    }
    const fromExpireTime = getValueByPath(fromObject, ['expireTime']);
    if (parentObject !== undefined && fromExpireTime != null) {
        setValueByPath(parentObject, ['expireTime'], fromExpireTime);
    }
    return toObject;
}
function updateCachedContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['_url', 'name'], tCachedContentName(apiClient, fromName));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], updateCachedContentConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function listCachedContentsConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, ['pageSize']);
    if (parentObject !== undefined && fromPageSize != null) {
        setValueByPath(parentObject, ['_query', 'pageSize'], fromPageSize);
    }
    const fromPageToken = getValueByPath(fromObject, ['pageToken']);
    if (parentObject !== undefined && fromPageToken != null) {
        setValueByPath(parentObject, ['_query', 'pageToken'], fromPageToken);
    }
    return toObject;
}
function listCachedContentsParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], listCachedContentsConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function partToVertex$2(apiClient, fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata',
    ]);
    if (fromVideoMetadata != null) {
        setValueByPath(toObject, ['videoMetadata'], fromVideoMetadata);
    }
    const fromThought = getValueByPath(fromObject, ['thought']);
    if (fromThought != null) {
        setValueByPath(toObject, ['thought'], fromThought);
    }
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult',
    ]);
    if (fromCodeExecutionResult != null) {
        setValueByPath(toObject, ['codeExecutionResult'], fromCodeExecutionResult);
    }
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode',
    ]);
    if (fromExecutableCode != null) {
        setValueByPath(toObject, ['executableCode'], fromExecutableCode);
    }
    const fromFileData = getValueByPath(fromObject, ['fileData']);
    if (fromFileData != null) {
        setValueByPath(toObject, ['fileData'], fromFileData);
    }
    const fromFunctionCall = getValueByPath(fromObject, ['functionCall']);
    if (fromFunctionCall != null) {
        setValueByPath(toObject, ['functionCall'], fromFunctionCall);
    }
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse',
    ]);
    if (fromFunctionResponse != null) {
        setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
    }
    const fromInlineData = getValueByPath(fromObject, ['inlineData']);
    if (fromInlineData != null) {
        setValueByPath(toObject, ['inlineData'], fromInlineData);
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    return toObject;
}
function contentToVertex$2(apiClient, fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, ['parts']);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return partToVertex$2(apiClient, item);
            });
        }
        setValueByPath(toObject, ['parts'], transformedList);
    }
    const fromRole = getValueByPath(fromObject, ['role']);
    if (fromRole != null) {
        setValueByPath(toObject, ['role'], fromRole);
    }
    return toObject;
}
function googleSearchToVertex$2() {
    const toObject = {};
    return toObject;
}
function dynamicRetrievalConfigToVertex$2(apiClient, fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, ['mode']);
    if (fromMode != null) {
        setValueByPath(toObject, ['mode'], fromMode);
    }
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold',
    ]);
    if (fromDynamicThreshold != null) {
        setValueByPath(toObject, ['dynamicThreshold'], fromDynamicThreshold);
    }
    return toObject;
}
function googleSearchRetrievalToVertex$2(apiClient, fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig',
    ]);
    if (fromDynamicRetrievalConfig != null) {
        setValueByPath(toObject, ['dynamicRetrievalConfig'], dynamicRetrievalConfigToVertex$2(apiClient, fromDynamicRetrievalConfig));
    }
    return toObject;
}
function enterpriseWebSearchToVertex$2() {
    const toObject = {};
    return toObject;
}
function apiKeyConfigToVertex$2(apiClient, fromObject) {
    const toObject = {};
    const fromApiKeyString = getValueByPath(fromObject, ['apiKeyString']);
    if (fromApiKeyString != null) {
        setValueByPath(toObject, ['apiKeyString'], fromApiKeyString);
    }
    return toObject;
}
function authConfigToVertex$2(apiClient, fromObject) {
    const toObject = {};
    const fromApiKeyConfig = getValueByPath(fromObject, ['apiKeyConfig']);
    if (fromApiKeyConfig != null) {
        setValueByPath(toObject, ['apiKeyConfig'], apiKeyConfigToVertex$2(apiClient, fromApiKeyConfig));
    }
    const fromAuthType = getValueByPath(fromObject, ['authType']);
    if (fromAuthType != null) {
        setValueByPath(toObject, ['authType'], fromAuthType);
    }
    const fromGoogleServiceAccountConfig = getValueByPath(fromObject, [
        'googleServiceAccountConfig',
    ]);
    if (fromGoogleServiceAccountConfig != null) {
        setValueByPath(toObject, ['googleServiceAccountConfig'], fromGoogleServiceAccountConfig);
    }
    const fromHttpBasicAuthConfig = getValueByPath(fromObject, [
        'httpBasicAuthConfig',
    ]);
    if (fromHttpBasicAuthConfig != null) {
        setValueByPath(toObject, ['httpBasicAuthConfig'], fromHttpBasicAuthConfig);
    }
    const fromOauthConfig = getValueByPath(fromObject, ['oauthConfig']);
    if (fromOauthConfig != null) {
        setValueByPath(toObject, ['oauthConfig'], fromOauthConfig);
    }
    const fromOidcConfig = getValueByPath(fromObject, ['oidcConfig']);
    if (fromOidcConfig != null) {
        setValueByPath(toObject, ['oidcConfig'], fromOidcConfig);
    }
    return toObject;
}
function googleMapsToVertex$2(apiClient, fromObject) {
    const toObject = {};
    const fromAuthConfig = getValueByPath(fromObject, ['authConfig']);
    if (fromAuthConfig != null) {
        setValueByPath(toObject, ['authConfig'], authConfigToVertex$2(apiClient, fromAuthConfig));
    }
    return toObject;
}
function toolToVertex$2(apiClient, fromObject) {
    const toObject = {};
    const fromRetrieval = getValueByPath(fromObject, ['retrieval']);
    if (fromRetrieval != null) {
        setValueByPath(toObject, ['retrieval'], fromRetrieval);
    }
    const fromGoogleSearch = getValueByPath(fromObject, ['googleSearch']);
    if (fromGoogleSearch != null) {
        setValueByPath(toObject, ['googleSearch'], googleSearchToVertex$2());
    }
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval',
    ]);
    if (fromGoogleSearchRetrieval != null) {
        setValueByPath(toObject, ['googleSearchRetrieval'], googleSearchRetrievalToVertex$2(apiClient, fromGoogleSearchRetrieval));
    }
    const fromEnterpriseWebSearch = getValueByPath(fromObject, [
        'enterpriseWebSearch',
    ]);
    if (fromEnterpriseWebSearch != null) {
        setValueByPath(toObject, ['enterpriseWebSearch'], enterpriseWebSearchToVertex$2());
    }
    const fromGoogleMaps = getValueByPath(fromObject, ['googleMaps']);
    if (fromGoogleMaps != null) {
        setValueByPath(toObject, ['googleMaps'], googleMapsToVertex$2(apiClient, fromGoogleMaps));
    }
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution',
    ]);
    if (fromCodeExecution != null) {
        setValueByPath(toObject, ['codeExecution'], fromCodeExecution);
    }
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations',
    ]);
    if (fromFunctionDeclarations != null) {
        setValueByPath(toObject, ['functionDeclarations'], fromFunctionDeclarations);
    }
    return toObject;
}
function functionCallingConfigToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, ['mode']);
    if (fromMode != null) {
        setValueByPath(toObject, ['mode'], fromMode);
    }
    const fromAllowedFunctionNames = getValueByPath(fromObject, [
        'allowedFunctionNames',
    ]);
    if (fromAllowedFunctionNames != null) {
        setValueByPath(toObject, ['allowedFunctionNames'], fromAllowedFunctionNames);
    }
    return toObject;
}
function latLngToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromLatitude = getValueByPath(fromObject, ['latitude']);
    if (fromLatitude != null) {
        setValueByPath(toObject, ['latitude'], fromLatitude);
    }
    const fromLongitude = getValueByPath(fromObject, ['longitude']);
    if (fromLongitude != null) {
        setValueByPath(toObject, ['longitude'], fromLongitude);
    }
    return toObject;
}
function retrievalConfigToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromLatLng = getValueByPath(fromObject, ['latLng']);
    if (fromLatLng != null) {
        setValueByPath(toObject, ['latLng'], latLngToVertex$1(apiClient, fromLatLng));
    }
    return toObject;
}
function toolConfigToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromFunctionCallingConfig = getValueByPath(fromObject, [
        'functionCallingConfig',
    ]);
    if (fromFunctionCallingConfig != null) {
        setValueByPath(toObject, ['functionCallingConfig'], functionCallingConfigToVertex$1(apiClient, fromFunctionCallingConfig));
    }
    const fromRetrievalConfig = getValueByPath(fromObject, [
        'retrievalConfig',
    ]);
    if (fromRetrievalConfig != null) {
        setValueByPath(toObject, ['retrievalConfig'], retrievalConfigToVertex$1(apiClient, fromRetrievalConfig));
    }
    return toObject;
}
function createCachedContentConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromTtl = getValueByPath(fromObject, ['ttl']);
    if (parentObject !== undefined && fromTtl != null) {
        setValueByPath(parentObject, ['ttl'], fromTtl);
    }
    const fromExpireTime = getValueByPath(fromObject, ['expireTime']);
    if (parentObject !== undefined && fromExpireTime != null) {
        setValueByPath(parentObject, ['expireTime'], fromExpireTime);
    }
    const fromDisplayName = getValueByPath(fromObject, ['displayName']);
    if (parentObject !== undefined && fromDisplayName != null) {
        setValueByPath(parentObject, ['displayName'], fromDisplayName);
    }
    const fromContents = getValueByPath(fromObject, ['contents']);
    if (parentObject !== undefined && fromContents != null) {
        let transformedList = tContents(apiClient, fromContents);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return contentToVertex$2(apiClient, item);
            });
        }
        setValueByPath(parentObject, ['contents'], transformedList);
    }
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction',
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) {
        setValueByPath(parentObject, ['systemInstruction'], contentToVertex$2(apiClient, tContent(apiClient, fromSystemInstruction)));
    }
    const fromTools = getValueByPath(fromObject, ['tools']);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = fromTools;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return toolToVertex$2(apiClient, item);
            });
        }
        setValueByPath(parentObject, ['tools'], transformedList);
    }
    const fromToolConfig = getValueByPath(fromObject, ['toolConfig']);
    if (parentObject !== undefined && fromToolConfig != null) {
        setValueByPath(parentObject, ['toolConfig'], toolConfigToVertex$1(apiClient, fromToolConfig));
    }
    return toObject;
}
function createCachedContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['model'], tCachesModel(apiClient, fromModel));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], createCachedContentConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function getCachedContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['_url', 'name'], tCachedContentName(apiClient, fromName));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function deleteCachedContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['_url', 'name'], tCachedContentName(apiClient, fromName));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function updateCachedContentConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromTtl = getValueByPath(fromObject, ['ttl']);
    if (parentObject !== undefined && fromTtl != null) {
        setValueByPath(parentObject, ['ttl'], fromTtl);
    }
    const fromExpireTime = getValueByPath(fromObject, ['expireTime']);
    if (parentObject !== undefined && fromExpireTime != null) {
        setValueByPath(parentObject, ['expireTime'], fromExpireTime);
    }
    return toObject;
}
function updateCachedContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['_url', 'name'], tCachedContentName(apiClient, fromName));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], updateCachedContentConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function listCachedContentsConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, ['pageSize']);
    if (parentObject !== undefined && fromPageSize != null) {
        setValueByPath(parentObject, ['_query', 'pageSize'], fromPageSize);
    }
    const fromPageToken = getValueByPath(fromObject, ['pageToken']);
    if (parentObject !== undefined && fromPageToken != null) {
        setValueByPath(parentObject, ['_query', 'pageToken'], fromPageToken);
    }
    return toObject;
}
function listCachedContentsParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], listCachedContentsConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function cachedContentFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromDisplayName = getValueByPath(fromObject, ['displayName']);
    if (fromDisplayName != null) {
        setValueByPath(toObject, ['displayName'], fromDisplayName);
    }
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['model'], fromModel);
    }
    const fromCreateTime = getValueByPath(fromObject, ['createTime']);
    if (fromCreateTime != null) {
        setValueByPath(toObject, ['createTime'], fromCreateTime);
    }
    const fromUpdateTime = getValueByPath(fromObject, ['updateTime']);
    if (fromUpdateTime != null) {
        setValueByPath(toObject, ['updateTime'], fromUpdateTime);
    }
    const fromExpireTime = getValueByPath(fromObject, ['expireTime']);
    if (fromExpireTime != null) {
        setValueByPath(toObject, ['expireTime'], fromExpireTime);
    }
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata',
    ]);
    if (fromUsageMetadata != null) {
        setValueByPath(toObject, ['usageMetadata'], fromUsageMetadata);
    }
    return toObject;
}
function deleteCachedContentResponseFromMldev() {
    const toObject = {};
    return toObject;
}
function listCachedContentsResponseFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken',
    ]);
    if (fromNextPageToken != null) {
        setValueByPath(toObject, ['nextPageToken'], fromNextPageToken);
    }
    const fromCachedContents = getValueByPath(fromObject, [
        'cachedContents',
    ]);
    if (fromCachedContents != null) {
        let transformedList = fromCachedContents;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return cachedContentFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['cachedContents'], transformedList);
    }
    return toObject;
}
function cachedContentFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromDisplayName = getValueByPath(fromObject, ['displayName']);
    if (fromDisplayName != null) {
        setValueByPath(toObject, ['displayName'], fromDisplayName);
    }
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['model'], fromModel);
    }
    const fromCreateTime = getValueByPath(fromObject, ['createTime']);
    if (fromCreateTime != null) {
        setValueByPath(toObject, ['createTime'], fromCreateTime);
    }
    const fromUpdateTime = getValueByPath(fromObject, ['updateTime']);
    if (fromUpdateTime != null) {
        setValueByPath(toObject, ['updateTime'], fromUpdateTime);
    }
    const fromExpireTime = getValueByPath(fromObject, ['expireTime']);
    if (fromExpireTime != null) {
        setValueByPath(toObject, ['expireTime'], fromExpireTime);
    }
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata',
    ]);
    if (fromUsageMetadata != null) {
        setValueByPath(toObject, ['usageMetadata'], fromUsageMetadata);
    }
    return toObject;
}
function deleteCachedContentResponseFromVertex() {
    const toObject = {};
    return toObject;
}
function listCachedContentsResponseFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken',
    ]);
    if (fromNextPageToken != null) {
        setValueByPath(toObject, ['nextPageToken'], fromNextPageToken);
    }
    const fromCachedContents = getValueByPath(fromObject, [
        'cachedContents',
    ]);
    if (fromCachedContents != null) {
        let transformedList = fromCachedContents;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return cachedContentFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['cachedContents'], transformedList);
    }
    return toObject;
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Pagers for the GenAI List APIs.
 */
var PagedItem;
(function (PagedItem) {
    PagedItem["PAGED_ITEM_BATCH_JOBS"] = "batchJobs";
    PagedItem["PAGED_ITEM_MODELS"] = "models";
    PagedItem["PAGED_ITEM_TUNING_JOBS"] = "tuningJobs";
    PagedItem["PAGED_ITEM_FILES"] = "files";
    PagedItem["PAGED_ITEM_CACHED_CONTENTS"] = "cachedContents";
})(PagedItem || (PagedItem = {}));
/**
 * Pager class for iterating through paginated results.
 */
class Pager {
    constructor(name, request, response, params) {
        this.pageInternal = [];
        this.paramsInternal = {};
        this.requestInternal = request;
        this.init(name, response, params);
    }
    init(name, response, params) {
        var _a, _b;
        this.nameInternal = name;
        this.pageInternal = response[this.nameInternal] || [];
        this.idxInternal = 0;
        let requestParams = { config: {} };
        if (!params) {
            requestParams = { config: {} };
        }
        else if (typeof params === 'object') {
            requestParams = Object.assign({}, params);
        }
        else {
            requestParams = params;
        }
        if (requestParams['config']) {
            requestParams['config']['pageToken'] = response['nextPageToken'];
        }
        this.paramsInternal = requestParams;
        this.pageInternalSize =
            (_b = (_a = requestParams['config']) === null || _a === void 0 ? void 0 : _a['pageSize']) !== null && _b !== void 0 ? _b : this.pageInternal.length;
    }
    initNextPage(response) {
        this.init(this.nameInternal, response, this.paramsInternal);
    }
    /**
     * Returns the current page, which is a list of items.
     *
     * @remarks
     * The first page is retrieved when the pager is created. The returned list of
     * items could be a subset of the entire list.
     */
    get page() {
        return this.pageInternal;
    }
    /**
     * Returns the type of paged item (for example, ``batch_jobs``).
     */
    get name() {
        return this.nameInternal;
    }
    /**
     * Returns the length of the page fetched each time by this pager.
     *
     * @remarks
     * The number of items in the page is less than or equal to the page length.
     */
    get pageSize() {
        return this.pageInternalSize;
    }
    /**
     * Returns the parameters when making the API request for the next page.
     *
     * @remarks
     * Parameters contain a set of optional configs that can be
     * used to customize the API request. For example, the `pageToken` parameter
     * contains the token to request the next page.
     */
    get params() {
        return this.paramsInternal;
    }
    /**
     * Returns the total number of items in the current page.
     */
    get pageLength() {
        return this.pageInternal.length;
    }
    /**
     * Returns the item at the given index.
     */
    getItem(index) {
        return this.pageInternal[index];
    }
    /**
     * Returns an async iterator that support iterating through all items
     * retrieved from the API.
     *
     * @remarks
     * The iterator will automatically fetch the next page if there are more items
     * to fetch from the API.
     *
     * @example
     *
     * ```ts
     * const pager = await ai.files.list({config: {pageSize: 10}});
     * for await (const file of pager) {
     *   console.log(file.name);
     * }
     * ```
     */
    [Symbol.asyncIterator]() {
        return {
            next: async () => {
                if (this.idxInternal >= this.pageLength) {
                    if (this.hasNextPage()) {
                        await this.nextPage();
                    }
                    else {
                        return { value: undefined, done: true };
                    }
                }
                const item = this.getItem(this.idxInternal);
                this.idxInternal += 1;
                return { value: item, done: false };
            },
            return: async () => {
                return { value: undefined, done: true };
            },
        };
    }
    /**
     * Fetches the next page of items. This makes a new API request.
     *
     * @throws {Error} If there are no more pages to fetch.
     *
     * @example
     *
     * ```ts
     * const pager = await ai.files.list({config: {pageSize: 10}});
     * let page = pager.page;
     * while (true) {
     *   for (const file of page) {
     *     console.log(file.name);
     *   }
     *   if (!pager.hasNextPage()) {
     *     break;
     *   }
     *   page = await pager.nextPage();
     * }
     * ```
     */
    async nextPage() {
        if (!this.hasNextPage()) {
            throw new Error('No more pages to fetch.');
        }
        const response = await this.requestInternal(this.params);
        this.initNextPage(response);
        return this.page;
    }
    /**
     * Returns true if there are more pages to fetch from the API.
     */
    hasNextPage() {
        var _a;
        if (((_a = this.params['config']) === null || _a === void 0 ? void 0 : _a['pageToken']) !== undefined) {
            return true;
        }
        return false;
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Code generated by the Google Gen AI SDK generator DO NOT EDIT.
/** Required. Outcome of the code execution. */
var Outcome;
(function (Outcome) {
    Outcome["OUTCOME_UNSPECIFIED"] = "OUTCOME_UNSPECIFIED";
    Outcome["OUTCOME_OK"] = "OUTCOME_OK";
    Outcome["OUTCOME_FAILED"] = "OUTCOME_FAILED";
    Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "OUTCOME_DEADLINE_EXCEEDED";
})(Outcome || (Outcome = {}));
/** Required. Programming language of the `code`. */
var Language;
(function (Language) {
    Language["LANGUAGE_UNSPECIFIED"] = "LANGUAGE_UNSPECIFIED";
    Language["PYTHON"] = "PYTHON";
})(Language || (Language = {}));
/** Required. Harm category. */
var HarmCategory$1;
(function (HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_CIVIC_INTEGRITY"] = "HARM_CATEGORY_CIVIC_INTEGRITY";
})(HarmCategory$1 || (HarmCategory$1 = {}));
/** Optional. Specify if the threshold is used for probability or severity score. If not specified, the threshold is used for probability score. */
var HarmBlockMethod;
(function (HarmBlockMethod) {
    HarmBlockMethod["HARM_BLOCK_METHOD_UNSPECIFIED"] = "HARM_BLOCK_METHOD_UNSPECIFIED";
    HarmBlockMethod["SEVERITY"] = "SEVERITY";
    HarmBlockMethod["PROBABILITY"] = "PROBABILITY";
})(HarmBlockMethod || (HarmBlockMethod = {}));
/** Required. The harm block threshold. */
var HarmBlockThreshold$1;
(function (HarmBlockThreshold) {
    HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
    HarmBlockThreshold["OFF"] = "OFF";
})(HarmBlockThreshold$1 || (HarmBlockThreshold$1 = {}));
/** The mode of the predictor to be used in dynamic retrieval. */
var Mode;
(function (Mode) {
    Mode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    Mode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(Mode || (Mode = {}));
/** Type of auth scheme. */
var AuthType;
(function (AuthType) {
    AuthType["AUTH_TYPE_UNSPECIFIED"] = "AUTH_TYPE_UNSPECIFIED";
    AuthType["NO_AUTH"] = "NO_AUTH";
    AuthType["API_KEY_AUTH"] = "API_KEY_AUTH";
    AuthType["HTTP_BASIC_AUTH"] = "HTTP_BASIC_AUTH";
    AuthType["GOOGLE_SERVICE_ACCOUNT_AUTH"] = "GOOGLE_SERVICE_ACCOUNT_AUTH";
    AuthType["OAUTH"] = "OAUTH";
    AuthType["OIDC_AUTH"] = "OIDC_AUTH";
})(AuthType || (AuthType = {}));
/** Optional. The type of the data. */
var Type;
(function (Type) {
    Type["TYPE_UNSPECIFIED"] = "TYPE_UNSPECIFIED";
    Type["STRING"] = "STRING";
    Type["NUMBER"] = "NUMBER";
    Type["INTEGER"] = "INTEGER";
    Type["BOOLEAN"] = "BOOLEAN";
    Type["ARRAY"] = "ARRAY";
    Type["OBJECT"] = "OBJECT";
})(Type || (Type = {}));
/** Output only. The reason why the model stopped generating tokens.

  If empty, the model has not stopped generating the tokens.
   */
var FinishReason;
(function (FinishReason) {
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    FinishReason["STOP"] = "STOP";
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    FinishReason["SAFETY"] = "SAFETY";
    FinishReason["RECITATION"] = "RECITATION";
    FinishReason["LANGUAGE"] = "LANGUAGE";
    FinishReason["OTHER"] = "OTHER";
    FinishReason["BLOCKLIST"] = "BLOCKLIST";
    FinishReason["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
    FinishReason["SPII"] = "SPII";
    FinishReason["MALFORMED_FUNCTION_CALL"] = "MALFORMED_FUNCTION_CALL";
    FinishReason["IMAGE_SAFETY"] = "IMAGE_SAFETY";
})(FinishReason || (FinishReason = {}));
/** Output only. Harm probability levels in the content. */
var HarmProbability;
(function (HarmProbability) {
    HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    HarmProbability["LOW"] = "LOW";
    HarmProbability["MEDIUM"] = "MEDIUM";
    HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/** Output only. Harm severity levels in the content. */
var HarmSeverity;
(function (HarmSeverity) {
    HarmSeverity["HARM_SEVERITY_UNSPECIFIED"] = "HARM_SEVERITY_UNSPECIFIED";
    HarmSeverity["HARM_SEVERITY_NEGLIGIBLE"] = "HARM_SEVERITY_NEGLIGIBLE";
    HarmSeverity["HARM_SEVERITY_LOW"] = "HARM_SEVERITY_LOW";
    HarmSeverity["HARM_SEVERITY_MEDIUM"] = "HARM_SEVERITY_MEDIUM";
    HarmSeverity["HARM_SEVERITY_HIGH"] = "HARM_SEVERITY_HIGH";
})(HarmSeverity || (HarmSeverity = {}));
/** Output only. Blocked reason. */
var BlockedReason;
(function (BlockedReason) {
    BlockedReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    BlockedReason["SAFETY"] = "SAFETY";
    BlockedReason["OTHER"] = "OTHER";
    BlockedReason["BLOCKLIST"] = "BLOCKLIST";
    BlockedReason["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
})(BlockedReason || (BlockedReason = {}));
/** Output only. Traffic type. This shows whether a request consumes Pay-As-You-Go or Provisioned Throughput quota. */
var TrafficType;
(function (TrafficType) {
    TrafficType["TRAFFIC_TYPE_UNSPECIFIED"] = "TRAFFIC_TYPE_UNSPECIFIED";
    TrafficType["ON_DEMAND"] = "ON_DEMAND";
    TrafficType["PROVISIONED_THROUGHPUT"] = "PROVISIONED_THROUGHPUT";
})(TrafficType || (TrafficType = {}));
/** Server content modalities. */
var Modality;
(function (Modality) {
    Modality["MODALITY_UNSPECIFIED"] = "MODALITY_UNSPECIFIED";
    Modality["TEXT"] = "TEXT";
    Modality["IMAGE"] = "IMAGE";
    Modality["AUDIO"] = "AUDIO";
})(Modality || (Modality = {}));
/** The media resolution to use. */
var MediaResolution;
(function (MediaResolution) {
    MediaResolution["MEDIA_RESOLUTION_UNSPECIFIED"] = "MEDIA_RESOLUTION_UNSPECIFIED";
    MediaResolution["MEDIA_RESOLUTION_LOW"] = "MEDIA_RESOLUTION_LOW";
    MediaResolution["MEDIA_RESOLUTION_MEDIUM"] = "MEDIA_RESOLUTION_MEDIUM";
    MediaResolution["MEDIA_RESOLUTION_HIGH"] = "MEDIA_RESOLUTION_HIGH";
})(MediaResolution || (MediaResolution = {}));
/** Output only. The detailed state of the job. */
var JobState;
(function (JobState) {
    JobState["JOB_STATE_UNSPECIFIED"] = "JOB_STATE_UNSPECIFIED";
    JobState["JOB_STATE_QUEUED"] = "JOB_STATE_QUEUED";
    JobState["JOB_STATE_PENDING"] = "JOB_STATE_PENDING";
    JobState["JOB_STATE_RUNNING"] = "JOB_STATE_RUNNING";
    JobState["JOB_STATE_SUCCEEDED"] = "JOB_STATE_SUCCEEDED";
    JobState["JOB_STATE_FAILED"] = "JOB_STATE_FAILED";
    JobState["JOB_STATE_CANCELLING"] = "JOB_STATE_CANCELLING";
    JobState["JOB_STATE_CANCELLED"] = "JOB_STATE_CANCELLED";
    JobState["JOB_STATE_PAUSED"] = "JOB_STATE_PAUSED";
    JobState["JOB_STATE_EXPIRED"] = "JOB_STATE_EXPIRED";
    JobState["JOB_STATE_UPDATING"] = "JOB_STATE_UPDATING";
    JobState["JOB_STATE_PARTIALLY_SUCCEEDED"] = "JOB_STATE_PARTIALLY_SUCCEEDED";
})(JobState || (JobState = {}));
/** Optional. Adapter size for tuning. */
var AdapterSize;
(function (AdapterSize) {
    AdapterSize["ADAPTER_SIZE_UNSPECIFIED"] = "ADAPTER_SIZE_UNSPECIFIED";
    AdapterSize["ADAPTER_SIZE_ONE"] = "ADAPTER_SIZE_ONE";
    AdapterSize["ADAPTER_SIZE_TWO"] = "ADAPTER_SIZE_TWO";
    AdapterSize["ADAPTER_SIZE_FOUR"] = "ADAPTER_SIZE_FOUR";
    AdapterSize["ADAPTER_SIZE_EIGHT"] = "ADAPTER_SIZE_EIGHT";
    AdapterSize["ADAPTER_SIZE_SIXTEEN"] = "ADAPTER_SIZE_SIXTEEN";
    AdapterSize["ADAPTER_SIZE_THIRTY_TWO"] = "ADAPTER_SIZE_THIRTY_TWO";
})(AdapterSize || (AdapterSize = {}));
/** Options for feature selection preference. */
var FeatureSelectionPreference;
(function (FeatureSelectionPreference) {
    FeatureSelectionPreference["FEATURE_SELECTION_PREFERENCE_UNSPECIFIED"] = "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED";
    FeatureSelectionPreference["PRIORITIZE_QUALITY"] = "PRIORITIZE_QUALITY";
    FeatureSelectionPreference["BALANCED"] = "BALANCED";
    FeatureSelectionPreference["PRIORITIZE_COST"] = "PRIORITIZE_COST";
})(FeatureSelectionPreference || (FeatureSelectionPreference = {}));
/** Config for the dynamic retrieval config mode. */
var DynamicRetrievalConfigMode;
(function (DynamicRetrievalConfigMode) {
    DynamicRetrievalConfigMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    DynamicRetrievalConfigMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalConfigMode || (DynamicRetrievalConfigMode = {}));
/** Config for the function calling config mode. */
var FunctionCallingConfigMode;
(function (FunctionCallingConfigMode) {
    FunctionCallingConfigMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    FunctionCallingConfigMode["AUTO"] = "AUTO";
    FunctionCallingConfigMode["ANY"] = "ANY";
    FunctionCallingConfigMode["NONE"] = "NONE";
})(FunctionCallingConfigMode || (FunctionCallingConfigMode = {}));
/** Enum that controls the safety filter level for objectionable content. */
var SafetyFilterLevel;
(function (SafetyFilterLevel) {
    SafetyFilterLevel["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    SafetyFilterLevel["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    SafetyFilterLevel["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    SafetyFilterLevel["BLOCK_NONE"] = "BLOCK_NONE";
})(SafetyFilterLevel || (SafetyFilterLevel = {}));
/** Enum that controls the generation of people. */
var PersonGeneration;
(function (PersonGeneration) {
    PersonGeneration["DONT_ALLOW"] = "DONT_ALLOW";
    PersonGeneration["ALLOW_ADULT"] = "ALLOW_ADULT";
    PersonGeneration["ALLOW_ALL"] = "ALLOW_ALL";
})(PersonGeneration || (PersonGeneration = {}));
/** Enum that specifies the language of the text in the prompt. */
var ImagePromptLanguage;
(function (ImagePromptLanguage) {
    ImagePromptLanguage["auto"] = "auto";
    ImagePromptLanguage["en"] = "en";
    ImagePromptLanguage["ja"] = "ja";
    ImagePromptLanguage["ko"] = "ko";
    ImagePromptLanguage["hi"] = "hi";
})(ImagePromptLanguage || (ImagePromptLanguage = {}));
/** State for the lifecycle of a File. */
var FileState;
(function (FileState) {
    FileState["STATE_UNSPECIFIED"] = "STATE_UNSPECIFIED";
    FileState["PROCESSING"] = "PROCESSING";
    FileState["ACTIVE"] = "ACTIVE";
    FileState["FAILED"] = "FAILED";
})(FileState || (FileState = {}));
/** Source of the File. */
var FileSource;
(function (FileSource) {
    FileSource["SOURCE_UNSPECIFIED"] = "SOURCE_UNSPECIFIED";
    FileSource["UPLOADED"] = "UPLOADED";
    FileSource["GENERATED"] = "GENERATED";
})(FileSource || (FileSource = {}));
/** Enum representing the mask mode of a mask reference image. */
var MaskReferenceMode;
(function (MaskReferenceMode) {
    MaskReferenceMode["MASK_MODE_DEFAULT"] = "MASK_MODE_DEFAULT";
    MaskReferenceMode["MASK_MODE_USER_PROVIDED"] = "MASK_MODE_USER_PROVIDED";
    MaskReferenceMode["MASK_MODE_BACKGROUND"] = "MASK_MODE_BACKGROUND";
    MaskReferenceMode["MASK_MODE_FOREGROUND"] = "MASK_MODE_FOREGROUND";
    MaskReferenceMode["MASK_MODE_SEMANTIC"] = "MASK_MODE_SEMANTIC";
})(MaskReferenceMode || (MaskReferenceMode = {}));
/** Enum representing the control type of a control reference image. */
var ControlReferenceType;
(function (ControlReferenceType) {
    ControlReferenceType["CONTROL_TYPE_DEFAULT"] = "CONTROL_TYPE_DEFAULT";
    ControlReferenceType["CONTROL_TYPE_CANNY"] = "CONTROL_TYPE_CANNY";
    ControlReferenceType["CONTROL_TYPE_SCRIBBLE"] = "CONTROL_TYPE_SCRIBBLE";
    ControlReferenceType["CONTROL_TYPE_FACE_MESH"] = "CONTROL_TYPE_FACE_MESH";
})(ControlReferenceType || (ControlReferenceType = {}));
/** Enum representing the subject type of a subject reference image. */
var SubjectReferenceType;
(function (SubjectReferenceType) {
    SubjectReferenceType["SUBJECT_TYPE_DEFAULT"] = "SUBJECT_TYPE_DEFAULT";
    SubjectReferenceType["SUBJECT_TYPE_PERSON"] = "SUBJECT_TYPE_PERSON";
    SubjectReferenceType["SUBJECT_TYPE_ANIMAL"] = "SUBJECT_TYPE_ANIMAL";
    SubjectReferenceType["SUBJECT_TYPE_PRODUCT"] = "SUBJECT_TYPE_PRODUCT";
})(SubjectReferenceType || (SubjectReferenceType = {}));
/** Server content modalities. */
var MediaModality;
(function (MediaModality) {
    MediaModality["MODALITY_UNSPECIFIED"] = "MODALITY_UNSPECIFIED";
    MediaModality["TEXT"] = "TEXT";
    MediaModality["IMAGE"] = "IMAGE";
    MediaModality["VIDEO"] = "VIDEO";
    MediaModality["AUDIO"] = "AUDIO";
    MediaModality["DOCUMENT"] = "DOCUMENT";
})(MediaModality || (MediaModality = {}));
/** Start of speech sensitivity. */
var StartSensitivity;
(function (StartSensitivity) {
    StartSensitivity["START_SENSITIVITY_UNSPECIFIED"] = "START_SENSITIVITY_UNSPECIFIED";
    StartSensitivity["START_SENSITIVITY_HIGH"] = "START_SENSITIVITY_HIGH";
    StartSensitivity["START_SENSITIVITY_LOW"] = "START_SENSITIVITY_LOW";
})(StartSensitivity || (StartSensitivity = {}));
/** End of speech sensitivity. */
var EndSensitivity;
(function (EndSensitivity) {
    EndSensitivity["END_SENSITIVITY_UNSPECIFIED"] = "END_SENSITIVITY_UNSPECIFIED";
    EndSensitivity["END_SENSITIVITY_HIGH"] = "END_SENSITIVITY_HIGH";
    EndSensitivity["END_SENSITIVITY_LOW"] = "END_SENSITIVITY_LOW";
})(EndSensitivity || (EndSensitivity = {}));
/** The different ways of handling user activity. */
var ActivityHandling;
(function (ActivityHandling) {
    ActivityHandling["ACTIVITY_HANDLING_UNSPECIFIED"] = "ACTIVITY_HANDLING_UNSPECIFIED";
    ActivityHandling["START_OF_ACTIVITY_INTERRUPTS"] = "START_OF_ACTIVITY_INTERRUPTS";
    ActivityHandling["NO_INTERRUPTION"] = "NO_INTERRUPTION";
})(ActivityHandling || (ActivityHandling = {}));
/** Options about which input is included in the user's turn. */
var TurnCoverage;
(function (TurnCoverage) {
    TurnCoverage["TURN_COVERAGE_UNSPECIFIED"] = "TURN_COVERAGE_UNSPECIFIED";
    TurnCoverage["TURN_INCLUDES_ONLY_ACTIVITY"] = "TURN_INCLUDES_ONLY_ACTIVITY";
    TurnCoverage["TURN_INCLUDES_ALL_INPUT"] = "TURN_INCLUDES_ALL_INPUT";
})(TurnCoverage || (TurnCoverage = {}));
/**
 * Creates a `Part` object from a `text` string.
 */
function createPartFromText(text) {
    return {
        text: text,
    };
}
/**
 * Creates a `Part` object from a `base64` encoded `string`.
 */
function createPartFromBase64(data, mimeType) {
    return {
        inlineData: {
            data: data,
            mimeType: mimeType,
        },
    };
}
function _isPart(obj) {
    if (typeof obj === 'object' && obj !== null) {
        return ('fileData' in obj ||
            'text' in obj ||
            'functionCall' in obj ||
            'functionResponse' in obj ||
            'inlineData' in obj ||
            'videoMetadata' in obj ||
            'codeExecutionResult' in obj ||
            'executableCode' in obj);
    }
    return false;
}
function _toParts(partOrString) {
    const parts = [];
    if (typeof partOrString === 'string') {
        parts.push(createPartFromText(partOrString));
    }
    else if (_isPart(partOrString)) {
        parts.push(partOrString);
    }
    else if (Array.isArray(partOrString)) {
        if (partOrString.length === 0) {
            throw new Error('partOrString cannot be an empty array');
        }
        for (const part of partOrString) {
            if (typeof part === 'string') {
                parts.push(createPartFromText(part));
            }
            else if (_isPart(part)) {
                parts.push(part);
            }
            else {
                throw new Error('element in PartUnion must be a Part object or string');
            }
        }
    }
    else {
        throw new Error('partOrString must be a Part object, string, or array');
    }
    return parts;
}
/**
 * Creates a `Content` object with a user role from a `PartListUnion` object or `string`.
 */
function createUserContent(partOrString) {
    return {
        role: 'user',
        parts: _toParts(partOrString),
    };
}
/**
 * Creates a `Content` object with a model role from a `PartListUnion` object or `string`.
 */
function createModelContent(partOrString) {
    return {
        role: 'model',
        parts: _toParts(partOrString),
    };
}
/** Response message for PredictionService.GenerateContent. */
class GenerateContentResponse {
    /**
     * Returns the concatenation of all text parts from the first candidate in the response.
     *
     * @remarks
     * If there are multiple candidates in the response, the text from the first
     * one will be returned.
     * If there are non-text parts in the response, the concatenation of all text
     * parts will be returned, and a warning will be logged.
     * If there are thought parts in the response, the concatenation of all text
     * parts excluding the thought parts will be returned.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateContent({
     *   model: 'gemini-2.0-flash',
     *   contents:
     *     'Why is the sky blue?',
     * });
     *
     * console.debug(response.text);
     * ```
     */
    get text() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) {
            return undefined;
        }
        if (this.candidates && this.candidates.length > 1) {
            console.warn('there are multiple candidates in the response, returning text from the first one.');
        }
        let text = '';
        let anyTextPartText = false;
        const nonTextParts = [];
        for (const part of (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) !== null && _h !== void 0 ? _h : []) {
            for (const [fieldName, fieldValue] of Object.entries(part)) {
                if (fieldName !== 'text' &&
                    fieldName !== 'thought' &&
                    (fieldValue !== null || fieldValue !== undefined)) {
                    nonTextParts.push(fieldName);
                }
            }
            if (typeof part.text === 'string') {
                if (typeof part.thought === 'boolean' && part.thought) {
                    continue;
                }
                anyTextPartText = true;
                text += part.text;
            }
        }
        if (nonTextParts.length > 0) {
            console.warn(`there are non-text parts ${nonTextParts} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`);
        }
        // part.text === '' is different from part.text is null
        return anyTextPartText ? text : undefined;
    }
    /**
     * Returns the concatenation of all inline data parts from the first candidate
     * in the response.
     *
     * @remarks
     * If there are multiple candidates in the response, the inline data from the
     * first one will be returned. If there are non-inline data parts in the
     * response, the concatenation of all inline data parts will be returned, and
     * a warning will be logged.
     */
    get data() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) {
            return undefined;
        }
        if (this.candidates && this.candidates.length > 1) {
            console.warn('there are multiple candidates in the response, returning data from the first one.');
        }
        let data = '';
        const nonDataParts = [];
        for (const part of (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) !== null && _h !== void 0 ? _h : []) {
            for (const [fieldName, fieldValue] of Object.entries(part)) {
                if (fieldName !== 'inlineData' &&
                    (fieldValue !== null || fieldValue !== undefined)) {
                    nonDataParts.push(fieldName);
                }
            }
            if (part.inlineData && typeof part.inlineData.data === 'string') {
                data += atob(part.inlineData.data);
            }
        }
        if (nonDataParts.length > 0) {
            console.warn(`there are non-data parts ${nonDataParts} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`);
        }
        return data.length > 0 ? btoa(data) : undefined;
    }
    /**
     * Returns the function calls from the first candidate in the response.
     *
     * @remarks
     * If there are multiple candidates in the response, the function calls from
     * the first one will be returned.
     * If there are no function calls in the response, undefined will be returned.
     *
     * @example
     * ```ts
     * const controlLightFunctionDeclaration: FunctionDeclaration = {
     *   name: 'controlLight',
     *   parameters: {
     *   type: Type.OBJECT,
     *   description: 'Set the brightness and color temperature of a room light.',
     *   properties: {
     *     brightness: {
     *       type: Type.NUMBER,
     *       description:
     *         'Light level from 0 to 100. Zero is off and 100 is full brightness.',
     *     },
     *     colorTemperature: {
     *       type: Type.STRING,
     *       description:
     *         'Color temperature of the light fixture which can be `daylight`, `cool` or `warm`.',
     *     },
     *   },
     *   required: ['brightness', 'colorTemperature'],
     *  };
     *  const response = await ai.models.generateContent({
     *     model: 'gemini-2.0-flash',
     *     contents: 'Dim the lights so the room feels cozy and warm.',
     *     config: {
     *       tools: [{functionDeclarations: [controlLightFunctionDeclaration]}],
     *       toolConfig: {
     *         functionCallingConfig: {
     *           mode: FunctionCallingConfigMode.ANY,
     *           allowedFunctionNames: ['controlLight'],
     *         },
     *       },
     *     },
     *   });
     *  console.debug(JSON.stringify(response.functionCalls));
     * ```
     */
    get functionCalls() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) {
            return undefined;
        }
        if (this.candidates && this.candidates.length > 1) {
            console.warn('there are multiple candidates in the response, returning function calls from the first one.');
        }
        const functionCalls = (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) === null || _h === void 0 ? void 0 : _h.filter((part) => part.functionCall).map((part) => part.functionCall).filter((functionCall) => functionCall !== undefined);
        if ((functionCalls === null || functionCalls === void 0 ? void 0 : functionCalls.length) === 0) {
            return undefined;
        }
        return functionCalls;
    }
    /**
     * Returns the first executable code from the first candidate in the response.
     *
     * @remarks
     * If there are multiple candidates in the response, the executable code from
     * the first one will be returned.
     * If there are no executable code in the response, undefined will be
     * returned.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateContent({
     *   model: 'gemini-2.0-flash',
     *   contents:
     *     'What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50.'
     *   config: {
     *     tools: [{codeExecution: {}}],
     *   },
     * });
     *
     * console.debug(response.executableCode);
     * ```
     */
    get executableCode() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) {
            return undefined;
        }
        if (this.candidates && this.candidates.length > 1) {
            console.warn('there are multiple candidates in the response, returning executable code from the first one.');
        }
        const executableCode = (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) === null || _h === void 0 ? void 0 : _h.filter((part) => part.executableCode).map((part) => part.executableCode).filter((executableCode) => executableCode !== undefined);
        if ((executableCode === null || executableCode === void 0 ? void 0 : executableCode.length) === 0) {
            return undefined;
        }
        return (_j = executableCode === null || executableCode === void 0 ? void 0 : executableCode[0]) === null || _j === void 0 ? void 0 : _j.code;
    }
    /**
     * Returns the first code execution result from the first candidate in the response.
     *
     * @remarks
     * If there are multiple candidates in the response, the code execution result from
     * the first one will be returned.
     * If there are no code execution result in the response, undefined will be returned.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateContent({
     *   model: 'gemini-2.0-flash',
     *   contents:
     *     'What is the sum of the first 50 prime numbers? Generate and run code for the calculation, and make sure you get all 50.'
     *   config: {
     *     tools: [{codeExecution: {}}],
     *   },
     * });
     *
     * console.debug(response.codeExecutionResult);
     * ```
     */
    get codeExecutionResult() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (((_d = (_c = (_b = (_a = this.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts) === null || _d === void 0 ? void 0 : _d.length) === 0) {
            return undefined;
        }
        if (this.candidates && this.candidates.length > 1) {
            console.warn('there are multiple candidates in the response, returning code execution result from the first one.');
        }
        const codeExecutionResult = (_h = (_g = (_f = (_e = this.candidates) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.parts) === null || _h === void 0 ? void 0 : _h.filter((part) => part.codeExecutionResult).map((part) => part.codeExecutionResult).filter((codeExecutionResult) => codeExecutionResult !== undefined);
        if ((codeExecutionResult === null || codeExecutionResult === void 0 ? void 0 : codeExecutionResult.length) === 0) {
            return undefined;
        }
        return (_j = codeExecutionResult === null || codeExecutionResult === void 0 ? void 0 : codeExecutionResult[0]) === null || _j === void 0 ? void 0 : _j.output;
    }
}
/** Response for the embed_content method. */
class EmbedContentResponse {
}
/** The output images response. */
class GenerateImagesResponse {
}
class ListModelsResponse {
}
class DeleteModelResponse {
}
/** Response for counting tokens. */
class CountTokensResponse {
}
/** Response for computing tokens. */
class ComputeTokensResponse {
}
/** Response for the list tuning jobs method. */
class ListTuningJobsResponse {
}
/** Empty response for caches.delete method. */
class DeleteCachedContentResponse {
}
class ListCachedContentsResponse {
}
/** Response for the list files method. */
class ListFilesResponse {
}
/** A wrapper class for the http response. */
class HttpResponse {
    constructor(response) {
        // Process the headers.
        const headers = {};
        for (const pair of response.headers.entries()) {
            headers[pair[0]] = pair[1];
        }
        this.headers = headers;
        // Keep the original response.
        this.responseInternal = response;
    }
    json() {
        return this.responseInternal.json();
    }
}
/** Response for the create file method. */
class CreateFileResponse {
}
/** Response for the delete file method. */
class DeleteFileResponse {
}
/** Response message for API call. */
class LiveServerMessage {
    /**
     * Returns the concatenation of all text parts from the server content if present.
     *
     * @remarks
     * If there are non-text parts in the response, the concatenation of all text
     * parts will be returned, and a warning will be logged.
     */
    get text() {
        var _a, _b, _c;
        let text = '';
        let anyTextPartFound = false;
        const nonTextParts = [];
        for (const part of (_c = (_b = (_a = this.serverContent) === null || _a === void 0 ? void 0 : _a.modelTurn) === null || _b === void 0 ? void 0 : _b.parts) !== null && _c !== void 0 ? _c : []) {
            for (const [fieldName, fieldValue] of Object.entries(part)) {
                if (fieldName !== 'text' &&
                    fieldName !== 'thought' &&
                    fieldValue !== null) {
                    nonTextParts.push(fieldName);
                }
            }
            if (typeof part.text === 'string') {
                if (typeof part.thought === 'boolean' && part.thought) {
                    continue;
                }
                anyTextPartFound = true;
                text += part.text;
            }
        }
        if (nonTextParts.length > 0) {
            console.warn(`there are non-text parts ${nonTextParts} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`);
        }
        // part.text === '' is different from part.text is null
        return anyTextPartFound ? text : undefined;
    }
    /**
     * Returns the concatenation of all inline data parts from the server content if present.
     *
     * @remarks
     * If there are non-inline data parts in the
     * response, the concatenation of all inline data parts will be returned, and
     * a warning will be logged.
     */
    get data() {
        var _a, _b, _c;
        let data = '';
        const nonDataParts = [];
        for (const part of (_c = (_b = (_a = this.serverContent) === null || _a === void 0 ? void 0 : _a.modelTurn) === null || _b === void 0 ? void 0 : _b.parts) !== null && _c !== void 0 ? _c : []) {
            for (const [fieldName, fieldValue] of Object.entries(part)) {
                if (fieldName !== 'inlineData' && fieldValue !== null) {
                    nonDataParts.push(fieldName);
                }
            }
            if (part.inlineData && typeof part.inlineData.data === 'string') {
                data += atob(part.inlineData.data);
            }
        }
        if (nonDataParts.length > 0) {
            console.warn(`there are non-data parts ${nonDataParts} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`);
        }
        return data.length > 0 ? btoa(data) : undefined;
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Caches extends BaseModule {
    constructor(apiClient) {
        super();
        this.apiClient = apiClient;
        /**
         * Lists cached content configurations.
         *
         * @param params - The parameters for the list request.
         * @return The paginated results of the list of cached contents.
         *
         * @example
         * ```ts
         * const cachedContents = await ai.caches.list({config: {'pageSize': 2}});
         * for (const cachedContent of cachedContents) {
         *   console.log(cachedContent);
         * }
         * ```
         */
        this.list = async (params = {}) => {
            return new Pager(PagedItem.PAGED_ITEM_CACHED_CONTENTS, (x) => this.listInternal(x), await this.listInternal(params), params);
        };
    }
    /**
     * Creates a cached contents resource.
     *
     * @remarks
     * Context caching is only supported for specific models. See [Gemini
     * Developer API reference](https://ai.google.dev/gemini-api/docs/caching?lang=node/context-cac)
     * and [Vertex AI reference](https://cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview#supported_models)
     * for more information.
     *
     * @param params - The parameters for the create request.
     * @return The created cached content.
     *
     * @example
     * ```ts
     * const contents = ...; // Initialize the content to cache.
     * const response = await ai.caches.create({
     *   model: 'gemini-2.0-flash-001',
     *   config: {
     *    'contents': contents,
     *    'displayName': 'test cache',
     *    'systemInstruction': 'What is the sum of the two pdfs?',
     *    'ttl': '86400s',
     *  }
     * });
     * ```
     */
    async create(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = createCachedContentParametersToVertex(this.apiClient, params);
            path = formatMap('cachedContents', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = cachedContentFromVertex(this.apiClient, apiResponse);
                return resp;
            });
        }
        else {
            const body = createCachedContentParametersToMldev(this.apiClient, params);
            path = formatMap('cachedContents', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = cachedContentFromMldev(this.apiClient, apiResponse);
                return resp;
            });
        }
    }
    /**
     * Gets cached content configurations.
     *
     * @param params - The parameters for the get request.
     * @return The cached content.
     *
     * @example
     * ```ts
     * await ai.caches.get({name: '...'}); // The server-generated resource name.
     * ```
     */
    async get(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = getCachedContentParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = cachedContentFromVertex(this.apiClient, apiResponse);
                return resp;
            });
        }
        else {
            const body = getCachedContentParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = cachedContentFromMldev(this.apiClient, apiResponse);
                return resp;
            });
        }
    }
    /**
     * Deletes cached content.
     *
     * @param params - The parameters for the delete request.
     * @return The empty response returned by the API.
     *
     * @example
     * ```ts
     * await ai.caches.delete({name: '...'}); // The server-generated resource name.
     * ```
     */
    async delete(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = deleteCachedContentParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then(() => {
                const resp = deleteCachedContentResponseFromVertex();
                const typedResp = new DeleteCachedContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
        else {
            const body = deleteCachedContentParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then(() => {
                const resp = deleteCachedContentResponseFromMldev();
                const typedResp = new DeleteCachedContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Updates cached content configurations.
     *
     * @param params - The parameters for the update request.
     * @return The updated cached content.
     *
     * @example
     * ```ts
     * const response = await ai.caches.update({
     *   name: '...',  // The server-generated resource name.
     *   config: {'ttl': '7600s'}
     * });
     * ```
     */
    async update(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = updateCachedContentParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'PATCH',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = cachedContentFromVertex(this.apiClient, apiResponse);
                return resp;
            });
        }
        else {
            const body = updateCachedContentParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'PATCH',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = cachedContentFromMldev(this.apiClient, apiResponse);
                return resp;
            });
        }
    }
    async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = listCachedContentsParametersToVertex(this.apiClient, params);
            path = formatMap('cachedContents', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = listCachedContentsResponseFromVertex(this.apiClient, apiResponse);
                const typedResp = new ListCachedContentsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
        else {
            const body = listCachedContentsParametersToMldev(this.apiClient, params);
            path = formatMap('cachedContents', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = listCachedContentsResponseFromMldev(this.apiClient, apiResponse);
                const typedResp = new ListCachedContentsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns true if the response is valid, false otherwise.
 */
function isValidResponse(response) {
    var _a;
    if (response.candidates == undefined || response.candidates.length === 0) {
        return false;
    }
    const content = (_a = response.candidates[0]) === null || _a === void 0 ? void 0 : _a.content;
    if (content === undefined) {
        return false;
    }
    return isValidContent(content);
}
function isValidContent(content) {
    if (content.parts === undefined || content.parts.length === 0) {
        return false;
    }
    for (const part of content.parts) {
        if (part === undefined || Object.keys(part).length === 0) {
            return false;
        }
        if (part.text !== undefined && part.text === '') {
            return false;
        }
    }
    return true;
}
/**
 * Validates the history contains the correct roles.
 *
 * @remarks
 * Expects the history to start with a user turn and then alternate between
 * user and model turns.
 *
 * @throws Error if the history does not start with a user turn.
 * @throws Error if the history contains an invalid role.
 */
function validateHistory(history) {
    // Empty history is valid.
    if (history.length === 0) {
        return;
    }
    if (history[0].role !== 'user') {
        throw new Error('History must start with a user turn.');
    }
    for (const content of history) {
        if (content.role !== 'user' && content.role !== 'model') {
            throw new Error(`Role must be user or model, but got ${content.role}.`);
        }
    }
}
/**
 * Extracts the curated (valid) history from a comprehensive history.
 *
 * @remarks
 * The model may sometimes generate invalid or empty contents(e.g., due to safty
 * filters or recitation). Extracting valid turns from the history
 * ensures that subsequent requests could be accpeted by the model.
 */
function extractCuratedHistory(comprehensiveHistory) {
    if (comprehensiveHistory === undefined || comprehensiveHistory.length === 0) {
        return [];
    }
    const curatedHistory = [];
    const length = comprehensiveHistory.length;
    let i = 0;
    let userInput = comprehensiveHistory[0];
    while (i < length) {
        if (comprehensiveHistory[i].role === 'user') {
            userInput = comprehensiveHistory[i];
            i++;
        }
        else {
            const modelOutput = [];
            let isValid = true;
            while (i < length && comprehensiveHistory[i].role === 'model') {
                modelOutput.push(comprehensiveHistory[i]);
                if (isValid && !isValidContent(comprehensiveHistory[i])) {
                    isValid = false;
                }
                i++;
            }
            if (isValid) {
                curatedHistory.push(userInput);
                curatedHistory.push(...modelOutput);
            }
        }
    }
    return curatedHistory;
}
/**
 * A utility class to create a chat session.
 */
class Chats {
    constructor(modelsModule, apiClient) {
        this.modelsModule = modelsModule;
        this.apiClient = apiClient;
    }
    /**
     * Creates a new chat session.
     *
     * @remarks
     * The config in the params will be used for all requests within the chat
     * session unless overridden by a per-request `config` in
     * @see {@link types.SendMessageParameters#config}.
     *
     * @param params - Parameters for creating a chat session.
     * @returns A new chat session.
     *
     * @example
     * ```ts
     * const chat = ai.chats.create({
     *   model: 'gemini-2.0-flash'
     *   config: {
     *     temperature: 0.5,
     *     maxOutputTokens: 1024,
     *   }
     * });
     * ```
     */
    create(params) {
        return new Chat(this.apiClient, this.modelsModule, params.model, params.config, params.history);
    }
}
/**
 * Chat session that enables sending messages to the model with previous
 * conversation context.
 *
 * @remarks
 * The session maintains all the turns between user and model.
 */
class Chat {
    constructor(apiClient, modelsModule, model, config = {}, history = []) {
        this.apiClient = apiClient;
        this.modelsModule = modelsModule;
        this.model = model;
        this.config = config;
        this.history = history;
        // A promise to represent the current state of the message being sent to the
        // model.
        this.sendPromise = Promise.resolve();
        validateHistory(history);
    }
    /**
     * Sends a message to the model and returns the response.
     *
     * @remarks
     * This method will wait for the previous message to be processed before
     * sending the next message.
     *
     * @see {@link Chat#sendMessageStream} for streaming method.
     * @param params - parameters for sending messages within a chat session.
     * @returns The model's response.
     *
     * @example
     * ```ts
     * const chat = ai.chats.create({model: 'gemini-2.0-flash'});
     * const response = await chat.sendMessage({
     *   message: 'Why is the sky blue?'
     * });
     * console.log(response.text);
     * ```
     */
    async sendMessage(params) {
        var _a;
        await this.sendPromise;
        const inputContent = tContent(this.apiClient, params.message);
        const responsePromise = this.modelsModule.generateContent({
            model: this.model,
            contents: this.getHistory(true).concat(inputContent),
            config: (_a = params.config) !== null && _a !== void 0 ? _a : this.config,
        });
        this.sendPromise = (async () => {
            var _a, _b;
            const response = await responsePromise;
            const outputContent = (_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content;
            const modelOutput = outputContent ? [outputContent] : [];
            this.recordHistory(inputContent, modelOutput);
            return;
        })();
        await this.sendPromise;
        return responsePromise;
    }
    /**
     * Sends a message to the model and returns the response in chunks.
     *
     * @remarks
     * This method will wait for the previous message to be processed before
     * sending the next message.
     *
     * @see {@link Chat#sendMessage} for non-streaming method.
     * @param params - parameters for sending the message.
     * @return The model's response.
     *
     * @example
     * ```ts
     * const chat = ai.chats.create({model: 'gemini-2.0-flash'});
     * const response = await chat.sendMessageStream({
     *   message: 'Why is the sky blue?'
     * });
     * for await (const chunk of response) {
     *   console.log(chunk.text);
     * }
     * ```
     */
    async sendMessageStream(params) {
        var _a;
        await this.sendPromise;
        const inputContent = tContent(this.apiClient, params.message);
        const streamResponse = this.modelsModule.generateContentStream({
            model: this.model,
            contents: this.getHistory(true).concat(inputContent),
            config: (_a = params.config) !== null && _a !== void 0 ? _a : this.config,
        });
        // Resolve the internal tracking of send completion promise - `sendPromise`
        // for both success and failure response. The actual failure is still
        // propagated by the `await streamResponse`.
        this.sendPromise = streamResponse
            .then(() => undefined)
            .catch(() => undefined);
        const response = await streamResponse;
        const result = this.processStreamResponse(response, inputContent);
        return result;
    }
    /**
     * Returns the chat history.
     *
     * @remarks
     * The history is a list of contents alternating between user and model.
     *
     * There are two types of history:
     * - The `curated history` contains only the valid turns between user and
     * model, which will be included in the subsequent requests sent to the model.
     * - The `comprehensive history` contains all turns, including invalid or
     *   empty model outputs, providing a complete record of the history.
     *
     * The history is updated after receiving the response from the model,
     * for streaming response, it means receiving the last chunk of the response.
     *
     * The `comprehensive history` is returned by default. To get the `curated
     * history`, set the `curated` parameter to `true`.
     *
     * @param curated - whether to return the curated history or the comprehensive
     *     history.
     * @return History contents alternating between user and model for the entire
     *     chat session.
     */
    getHistory(curated = false) {
        return curated ? extractCuratedHistory(this.history) : this.history;
    }
    processStreamResponse(streamResponse, inputContent) {
        var _a, _b;
        return __asyncGenerator(this, arguments, function* processStreamResponse_1() {
            var _c, e_1, _d, _e;
            const outputContent = [];
            try {
                for (var _f = true, streamResponse_1 = __asyncValues(streamResponse), streamResponse_1_1; streamResponse_1_1 = yield __await(streamResponse_1.next()), _c = streamResponse_1_1.done, !_c; _f = true) {
                    _e = streamResponse_1_1.value;
                    _f = false;
                    const chunk = _e;
                    if (isValidResponse(chunk)) {
                        const content = (_b = (_a = chunk.candidates) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.content;
                        if (content !== undefined) {
                            outputContent.push(content);
                        }
                    }
                    yield yield __await(chunk);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_f && !_c && (_d = streamResponse_1.return)) yield __await(_d.call(streamResponse_1));
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.recordHistory(inputContent, outputContent);
        });
    }
    recordHistory(userInput, modelOutput) {
        let outputContents = [];
        if (modelOutput.length > 0 &&
            modelOutput.every((content) => content.role === 'model')) {
            outputContents = modelOutput;
        }
        else {
            // Appends an empty content when model returns empty response, so that the
            // history is always alternating between user and model.
            outputContents.push({
                role: 'model',
                parts: [],
            });
        }
        this.history.push(userInput);
        this.history.push(...outputContents);
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function listFilesConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, ['pageSize']);
    if (parentObject !== undefined && fromPageSize != null) {
        setValueByPath(parentObject, ['_query', 'pageSize'], fromPageSize);
    }
    const fromPageToken = getValueByPath(fromObject, ['pageToken']);
    if (parentObject !== undefined && fromPageToken != null) {
        setValueByPath(parentObject, ['_query', 'pageToken'], fromPageToken);
    }
    return toObject;
}
function listFilesParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], listFilesConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function fileStatusToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromDetails = getValueByPath(fromObject, ['details']);
    if (fromDetails != null) {
        setValueByPath(toObject, ['details'], fromDetails);
    }
    const fromMessage = getValueByPath(fromObject, ['message']);
    if (fromMessage != null) {
        setValueByPath(toObject, ['message'], fromMessage);
    }
    const fromCode = getValueByPath(fromObject, ['code']);
    if (fromCode != null) {
        setValueByPath(toObject, ['code'], fromCode);
    }
    return toObject;
}
function fileToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromDisplayName = getValueByPath(fromObject, ['displayName']);
    if (fromDisplayName != null) {
        setValueByPath(toObject, ['displayName'], fromDisplayName);
    }
    const fromMimeType = getValueByPath(fromObject, ['mimeType']);
    if (fromMimeType != null) {
        setValueByPath(toObject, ['mimeType'], fromMimeType);
    }
    const fromSizeBytes = getValueByPath(fromObject, ['sizeBytes']);
    if (fromSizeBytes != null) {
        setValueByPath(toObject, ['sizeBytes'], fromSizeBytes);
    }
    const fromCreateTime = getValueByPath(fromObject, ['createTime']);
    if (fromCreateTime != null) {
        setValueByPath(toObject, ['createTime'], fromCreateTime);
    }
    const fromExpirationTime = getValueByPath(fromObject, [
        'expirationTime',
    ]);
    if (fromExpirationTime != null) {
        setValueByPath(toObject, ['expirationTime'], fromExpirationTime);
    }
    const fromUpdateTime = getValueByPath(fromObject, ['updateTime']);
    if (fromUpdateTime != null) {
        setValueByPath(toObject, ['updateTime'], fromUpdateTime);
    }
    const fromSha256Hash = getValueByPath(fromObject, ['sha256Hash']);
    if (fromSha256Hash != null) {
        setValueByPath(toObject, ['sha256Hash'], fromSha256Hash);
    }
    const fromUri = getValueByPath(fromObject, ['uri']);
    if (fromUri != null) {
        setValueByPath(toObject, ['uri'], fromUri);
    }
    const fromDownloadUri = getValueByPath(fromObject, ['downloadUri']);
    if (fromDownloadUri != null) {
        setValueByPath(toObject, ['downloadUri'], fromDownloadUri);
    }
    const fromState = getValueByPath(fromObject, ['state']);
    if (fromState != null) {
        setValueByPath(toObject, ['state'], fromState);
    }
    const fromSource = getValueByPath(fromObject, ['source']);
    if (fromSource != null) {
        setValueByPath(toObject, ['source'], fromSource);
    }
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata',
    ]);
    if (fromVideoMetadata != null) {
        setValueByPath(toObject, ['videoMetadata'], fromVideoMetadata);
    }
    const fromError = getValueByPath(fromObject, ['error']);
    if (fromError != null) {
        setValueByPath(toObject, ['error'], fileStatusToMldev(apiClient, fromError));
    }
    return toObject;
}
function createFileParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromFile = getValueByPath(fromObject, ['file']);
    if (fromFile != null) {
        setValueByPath(toObject, ['file'], fileToMldev(apiClient, fromFile));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function getFileParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['_url', 'file'], tFileName(apiClient, fromName));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function deleteFileParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['_url', 'file'], tFileName(apiClient, fromName));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function fileStatusFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromDetails = getValueByPath(fromObject, ['details']);
    if (fromDetails != null) {
        setValueByPath(toObject, ['details'], fromDetails);
    }
    const fromMessage = getValueByPath(fromObject, ['message']);
    if (fromMessage != null) {
        setValueByPath(toObject, ['message'], fromMessage);
    }
    const fromCode = getValueByPath(fromObject, ['code']);
    if (fromCode != null) {
        setValueByPath(toObject, ['code'], fromCode);
    }
    return toObject;
}
function fileFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromDisplayName = getValueByPath(fromObject, ['displayName']);
    if (fromDisplayName != null) {
        setValueByPath(toObject, ['displayName'], fromDisplayName);
    }
    const fromMimeType = getValueByPath(fromObject, ['mimeType']);
    if (fromMimeType != null) {
        setValueByPath(toObject, ['mimeType'], fromMimeType);
    }
    const fromSizeBytes = getValueByPath(fromObject, ['sizeBytes']);
    if (fromSizeBytes != null) {
        setValueByPath(toObject, ['sizeBytes'], fromSizeBytes);
    }
    const fromCreateTime = getValueByPath(fromObject, ['createTime']);
    if (fromCreateTime != null) {
        setValueByPath(toObject, ['createTime'], fromCreateTime);
    }
    const fromExpirationTime = getValueByPath(fromObject, [
        'expirationTime',
    ]);
    if (fromExpirationTime != null) {
        setValueByPath(toObject, ['expirationTime'], fromExpirationTime);
    }
    const fromUpdateTime = getValueByPath(fromObject, ['updateTime']);
    if (fromUpdateTime != null) {
        setValueByPath(toObject, ['updateTime'], fromUpdateTime);
    }
    const fromSha256Hash = getValueByPath(fromObject, ['sha256Hash']);
    if (fromSha256Hash != null) {
        setValueByPath(toObject, ['sha256Hash'], fromSha256Hash);
    }
    const fromUri = getValueByPath(fromObject, ['uri']);
    if (fromUri != null) {
        setValueByPath(toObject, ['uri'], fromUri);
    }
    const fromDownloadUri = getValueByPath(fromObject, ['downloadUri']);
    if (fromDownloadUri != null) {
        setValueByPath(toObject, ['downloadUri'], fromDownloadUri);
    }
    const fromState = getValueByPath(fromObject, ['state']);
    if (fromState != null) {
        setValueByPath(toObject, ['state'], fromState);
    }
    const fromSource = getValueByPath(fromObject, ['source']);
    if (fromSource != null) {
        setValueByPath(toObject, ['source'], fromSource);
    }
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata',
    ]);
    if (fromVideoMetadata != null) {
        setValueByPath(toObject, ['videoMetadata'], fromVideoMetadata);
    }
    const fromError = getValueByPath(fromObject, ['error']);
    if (fromError != null) {
        setValueByPath(toObject, ['error'], fileStatusFromMldev(apiClient, fromError));
    }
    return toObject;
}
function listFilesResponseFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken',
    ]);
    if (fromNextPageToken != null) {
        setValueByPath(toObject, ['nextPageToken'], fromNextPageToken);
    }
    const fromFiles = getValueByPath(fromObject, ['files']);
    if (fromFiles != null) {
        let transformedList = fromFiles;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return fileFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['files'], transformedList);
    }
    return toObject;
}
function createFileResponseFromMldev() {
    const toObject = {};
    return toObject;
}
function deleteFileResponseFromMldev() {
    const toObject = {};
    return toObject;
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Files extends BaseModule {
    constructor(apiClient) {
        super();
        this.apiClient = apiClient;
        /**
         * Lists all current project files from the service.
         *
         * @param params - The parameters for the list request
         * @return The paginated results of the list of files
         *
         * @example
         * The following code prints the names of all files from the service, the
         * size of each page is 10.
         *
         * ```ts
         * const listResponse = await ai.files.list({config: {'pageSize': 10}});
         * for await (const file of listResponse) {
         *   console.log(file.name);
         * }
         * ```
         */
        this.list = async (params = {}) => {
            return new Pager(PagedItem.PAGED_ITEM_FILES, (x) => this.listInternal(x), await this.listInternal(params), params);
        };
    }
    /**
     * Uploads a file asynchronously to the Gemini API.
     * This method is not available in Vertex AI.
     * Supported upload sources:
     * - Node.js: File path (string) or Blob object.
     * - Browser: Blob object (e.g., File).
     *
     * @remarks
     * The `mimeType` can be specified in the `config` parameter. If omitted:
     *  - For file path (string) inputs, the `mimeType` will be inferred from the
     *     file extension.
     *  - For Blob object inputs, the `mimeType` will be set to the Blob's `type`
     *     property.
     * Somex eamples for file extension to mimeType mapping:
     * .txt -> text/plain
     * .json -> application/json
     * .jpg  -> image/jpeg
     * .png -> image/png
     * .mp3 -> audio/mpeg
     * .mp4 -> video/mp4
     *
     * This section can contain multiple paragraphs and code examples.
     *
     * @param params - Optional parameters specified in the
     *        `types.UploadFileParameters` interface.
     *         @see {@link types.UploadFileParameters#config} for the optional
     *         config in the parameters.
     * @return A promise that resolves to a `types.File` object.
     * @throws An error if called on a Vertex AI client.
     * @throws An error if the `mimeType` is not provided and can not be inferred,
     * the `mimeType` can be provided in the `params.config` parameter.
     * @throws An error occurs if a suitable upload location cannot be established.
     *
     * @example
     * The following code uploads a file to Gemini API.
     *
     * ```ts
     * const file = await ai.files.upload({file: 'file.txt', config: {
     *   mimeType: 'text/plain',
     * }});
     * console.log(file.name);
     * ```
     */
    async upload(params) {
        if (this.apiClient.isVertexAI()) {
            throw new Error('Vertex AI does not support uploading files. You can share files through a GCS bucket.');
        }
        return this.apiClient
            .uploadFile(params.file, params.config)
            .then((response) => {
            const file = fileFromMldev(this.apiClient, response);
            return file;
        });
    }
    /**
     * Downloads a remotely stored file asynchronously to a location specified in
     * the `params` object. This method only works on Node environment, to
     * download files in the browser, use a browser compliant method like an <a>
     * tag.
     *
     * @param params - The parameters for the download request.
     *
     * @example
     * The following code downloads an example file named "files/mehozpxf877d" as
     * "file.txt".
     *
     * ```ts
     * await ai.files.download({file: file.name, downloadPath: 'file.txt'});
     * ```
     */
    async download(params) {
        await this.apiClient.downloadFile(params);
    }
    async listInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            throw new Error('This method is only supported by the Gemini Developer API.');
        }
        else {
            const body = listFilesParametersToMldev(this.apiClient, params);
            path = formatMap('files', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = listFilesResponseFromMldev(this.apiClient, apiResponse);
                const typedResp = new ListFilesResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    async createInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            throw new Error('This method is only supported by the Gemini Developer API.');
        }
        else {
            const body = createFileParametersToMldev(this.apiClient, params);
            path = formatMap('upload/v1beta/files', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then(() => {
                const resp = createFileResponseFromMldev();
                const typedResp = new CreateFileResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Retrieves the file information from the service.
     *
     * @param params - The parameters for the get request
     * @return The Promise that resolves to the types.File object requested.
     *
     * @example
     * ```ts
     * const config: GetFileParameters = {
     *   name: fileName,
     * };
     * file = await ai.files.get(config);
     * console.log(file.name);
     * ```
     */
    async get(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            throw new Error('This method is only supported by the Gemini Developer API.');
        }
        else {
            const body = getFileParametersToMldev(this.apiClient, params);
            path = formatMap('files/{file}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = fileFromMldev(this.apiClient, apiResponse);
                return resp;
            });
        }
    }
    /**
     * Deletes a remotely stored file.
     *
     * @param params - The parameters for the delete request.
     * @return The DeleteFileResponse, the response for the delete method.
     *
     * @example
     * The following code deletes an example file named "files/mehozpxf877d".
     *
     * ```ts
     * await ai.files.delete({name: file.name});
     * ```
     */
    async delete(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            throw new Error('This method is only supported by the Gemini Developer API.');
        }
        else {
            const body = deleteFileParametersToMldev(this.apiClient, params);
            path = formatMap('files/{file}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then(() => {
                const resp = deleteFileResponseFromMldev();
                const typedResp = new DeleteFileResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function partToMldev$1(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['videoMetadata']) !== undefined) {
        throw new Error('videoMetadata parameter is not supported in Gemini API.');
    }
    const fromThought = getValueByPath(fromObject, ['thought']);
    if (fromThought != null) {
        setValueByPath(toObject, ['thought'], fromThought);
    }
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult',
    ]);
    if (fromCodeExecutionResult != null) {
        setValueByPath(toObject, ['codeExecutionResult'], fromCodeExecutionResult);
    }
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode',
    ]);
    if (fromExecutableCode != null) {
        setValueByPath(toObject, ['executableCode'], fromExecutableCode);
    }
    const fromFileData = getValueByPath(fromObject, ['fileData']);
    if (fromFileData != null) {
        setValueByPath(toObject, ['fileData'], fromFileData);
    }
    const fromFunctionCall = getValueByPath(fromObject, ['functionCall']);
    if (fromFunctionCall != null) {
        setValueByPath(toObject, ['functionCall'], fromFunctionCall);
    }
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse',
    ]);
    if (fromFunctionResponse != null) {
        setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
    }
    const fromInlineData = getValueByPath(fromObject, ['inlineData']);
    if (fromInlineData != null) {
        setValueByPath(toObject, ['inlineData'], fromInlineData);
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    return toObject;
}
function partToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata',
    ]);
    if (fromVideoMetadata != null) {
        setValueByPath(toObject, ['videoMetadata'], fromVideoMetadata);
    }
    const fromThought = getValueByPath(fromObject, ['thought']);
    if (fromThought != null) {
        setValueByPath(toObject, ['thought'], fromThought);
    }
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult',
    ]);
    if (fromCodeExecutionResult != null) {
        setValueByPath(toObject, ['codeExecutionResult'], fromCodeExecutionResult);
    }
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode',
    ]);
    if (fromExecutableCode != null) {
        setValueByPath(toObject, ['executableCode'], fromExecutableCode);
    }
    const fromFileData = getValueByPath(fromObject, ['fileData']);
    if (fromFileData != null) {
        setValueByPath(toObject, ['fileData'], fromFileData);
    }
    const fromFunctionCall = getValueByPath(fromObject, ['functionCall']);
    if (fromFunctionCall != null) {
        setValueByPath(toObject, ['functionCall'], fromFunctionCall);
    }
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse',
    ]);
    if (fromFunctionResponse != null) {
        setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
    }
    const fromInlineData = getValueByPath(fromObject, ['inlineData']);
    if (fromInlineData != null) {
        setValueByPath(toObject, ['inlineData'], fromInlineData);
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    return toObject;
}
function contentToMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, ['parts']);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return partToMldev$1(apiClient, item);
            });
        }
        setValueByPath(toObject, ['parts'], transformedList);
    }
    const fromRole = getValueByPath(fromObject, ['role']);
    if (fromRole != null) {
        setValueByPath(toObject, ['role'], fromRole);
    }
    return toObject;
}
function contentToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, ['parts']);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return partToVertex$1(apiClient, item);
            });
        }
        setValueByPath(toObject, ['parts'], transformedList);
    }
    const fromRole = getValueByPath(fromObject, ['role']);
    if (fromRole != null) {
        setValueByPath(toObject, ['role'], fromRole);
    }
    return toObject;
}
function googleSearchToMldev$1() {
    const toObject = {};
    return toObject;
}
function googleSearchToVertex$1() {
    const toObject = {};
    return toObject;
}
function dynamicRetrievalConfigToMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, ['mode']);
    if (fromMode != null) {
        setValueByPath(toObject, ['mode'], fromMode);
    }
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold',
    ]);
    if (fromDynamicThreshold != null) {
        setValueByPath(toObject, ['dynamicThreshold'], fromDynamicThreshold);
    }
    return toObject;
}
function dynamicRetrievalConfigToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, ['mode']);
    if (fromMode != null) {
        setValueByPath(toObject, ['mode'], fromMode);
    }
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold',
    ]);
    if (fromDynamicThreshold != null) {
        setValueByPath(toObject, ['dynamicThreshold'], fromDynamicThreshold);
    }
    return toObject;
}
function googleSearchRetrievalToMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig',
    ]);
    if (fromDynamicRetrievalConfig != null) {
        setValueByPath(toObject, ['dynamicRetrievalConfig'], dynamicRetrievalConfigToMldev$1(apiClient, fromDynamicRetrievalConfig));
    }
    return toObject;
}
function googleSearchRetrievalToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig',
    ]);
    if (fromDynamicRetrievalConfig != null) {
        setValueByPath(toObject, ['dynamicRetrievalConfig'], dynamicRetrievalConfigToVertex$1(apiClient, fromDynamicRetrievalConfig));
    }
    return toObject;
}
function enterpriseWebSearchToVertex$1() {
    const toObject = {};
    return toObject;
}
function apiKeyConfigToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromApiKeyString = getValueByPath(fromObject, ['apiKeyString']);
    if (fromApiKeyString != null) {
        setValueByPath(toObject, ['apiKeyString'], fromApiKeyString);
    }
    return toObject;
}
function authConfigToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromApiKeyConfig = getValueByPath(fromObject, ['apiKeyConfig']);
    if (fromApiKeyConfig != null) {
        setValueByPath(toObject, ['apiKeyConfig'], apiKeyConfigToVertex$1(apiClient, fromApiKeyConfig));
    }
    const fromAuthType = getValueByPath(fromObject, ['authType']);
    if (fromAuthType != null) {
        setValueByPath(toObject, ['authType'], fromAuthType);
    }
    const fromGoogleServiceAccountConfig = getValueByPath(fromObject, [
        'googleServiceAccountConfig',
    ]);
    if (fromGoogleServiceAccountConfig != null) {
        setValueByPath(toObject, ['googleServiceAccountConfig'], fromGoogleServiceAccountConfig);
    }
    const fromHttpBasicAuthConfig = getValueByPath(fromObject, [
        'httpBasicAuthConfig',
    ]);
    if (fromHttpBasicAuthConfig != null) {
        setValueByPath(toObject, ['httpBasicAuthConfig'], fromHttpBasicAuthConfig);
    }
    const fromOauthConfig = getValueByPath(fromObject, ['oauthConfig']);
    if (fromOauthConfig != null) {
        setValueByPath(toObject, ['oauthConfig'], fromOauthConfig);
    }
    const fromOidcConfig = getValueByPath(fromObject, ['oidcConfig']);
    if (fromOidcConfig != null) {
        setValueByPath(toObject, ['oidcConfig'], fromOidcConfig);
    }
    return toObject;
}
function googleMapsToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromAuthConfig = getValueByPath(fromObject, ['authConfig']);
    if (fromAuthConfig != null) {
        setValueByPath(toObject, ['authConfig'], authConfigToVertex$1(apiClient, fromAuthConfig));
    }
    return toObject;
}
function toolToMldev$1(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['retrieval']) !== undefined) {
        throw new Error('retrieval parameter is not supported in Gemini API.');
    }
    const fromGoogleSearch = getValueByPath(fromObject, ['googleSearch']);
    if (fromGoogleSearch != null) {
        setValueByPath(toObject, ['googleSearch'], googleSearchToMldev$1());
    }
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval',
    ]);
    if (fromGoogleSearchRetrieval != null) {
        setValueByPath(toObject, ['googleSearchRetrieval'], googleSearchRetrievalToMldev$1(apiClient, fromGoogleSearchRetrieval));
    }
    if (getValueByPath(fromObject, ['enterpriseWebSearch']) !== undefined) {
        throw new Error('enterpriseWebSearch parameter is not supported in Gemini API.');
    }
    if (getValueByPath(fromObject, ['googleMaps']) !== undefined) {
        throw new Error('googleMaps parameter is not supported in Gemini API.');
    }
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution',
    ]);
    if (fromCodeExecution != null) {
        setValueByPath(toObject, ['codeExecution'], fromCodeExecution);
    }
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations',
    ]);
    if (fromFunctionDeclarations != null) {
        setValueByPath(toObject, ['functionDeclarations'], fromFunctionDeclarations);
    }
    return toObject;
}
function toolToVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromRetrieval = getValueByPath(fromObject, ['retrieval']);
    if (fromRetrieval != null) {
        setValueByPath(toObject, ['retrieval'], fromRetrieval);
    }
    const fromGoogleSearch = getValueByPath(fromObject, ['googleSearch']);
    if (fromGoogleSearch != null) {
        setValueByPath(toObject, ['googleSearch'], googleSearchToVertex$1());
    }
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval',
    ]);
    if (fromGoogleSearchRetrieval != null) {
        setValueByPath(toObject, ['googleSearchRetrieval'], googleSearchRetrievalToVertex$1(apiClient, fromGoogleSearchRetrieval));
    }
    const fromEnterpriseWebSearch = getValueByPath(fromObject, [
        'enterpriseWebSearch',
    ]);
    if (fromEnterpriseWebSearch != null) {
        setValueByPath(toObject, ['enterpriseWebSearch'], enterpriseWebSearchToVertex$1());
    }
    const fromGoogleMaps = getValueByPath(fromObject, ['googleMaps']);
    if (fromGoogleMaps != null) {
        setValueByPath(toObject, ['googleMaps'], googleMapsToVertex$1(apiClient, fromGoogleMaps));
    }
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution',
    ]);
    if (fromCodeExecution != null) {
        setValueByPath(toObject, ['codeExecution'], fromCodeExecution);
    }
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations',
    ]);
    if (fromFunctionDeclarations != null) {
        setValueByPath(toObject, ['functionDeclarations'], fromFunctionDeclarations);
    }
    return toObject;
}
function sessionResumptionConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromHandle = getValueByPath(fromObject, ['handle']);
    if (fromHandle != null) {
        setValueByPath(toObject, ['handle'], fromHandle);
    }
    if (getValueByPath(fromObject, ['transparent']) !== undefined) {
        throw new Error('transparent parameter is not supported in Gemini API.');
    }
    return toObject;
}
function sessionResumptionConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromHandle = getValueByPath(fromObject, ['handle']);
    if (fromHandle != null) {
        setValueByPath(toObject, ['handle'], fromHandle);
    }
    const fromTransparent = getValueByPath(fromObject, ['transparent']);
    if (fromTransparent != null) {
        setValueByPath(toObject, ['transparent'], fromTransparent);
    }
    return toObject;
}
function audioTranscriptionConfigToMldev() {
    const toObject = {};
    return toObject;
}
function audioTranscriptionConfigToVertex() {
    const toObject = {};
    return toObject;
}
function automaticActivityDetectionToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromDisabled = getValueByPath(fromObject, ['disabled']);
    if (fromDisabled != null) {
        setValueByPath(toObject, ['disabled'], fromDisabled);
    }
    const fromStartOfSpeechSensitivity = getValueByPath(fromObject, [
        'startOfSpeechSensitivity',
    ]);
    if (fromStartOfSpeechSensitivity != null) {
        setValueByPath(toObject, ['startOfSpeechSensitivity'], fromStartOfSpeechSensitivity);
    }
    const fromEndOfSpeechSensitivity = getValueByPath(fromObject, [
        'endOfSpeechSensitivity',
    ]);
    if (fromEndOfSpeechSensitivity != null) {
        setValueByPath(toObject, ['endOfSpeechSensitivity'], fromEndOfSpeechSensitivity);
    }
    const fromPrefixPaddingMs = getValueByPath(fromObject, [
        'prefixPaddingMs',
    ]);
    if (fromPrefixPaddingMs != null) {
        setValueByPath(toObject, ['prefixPaddingMs'], fromPrefixPaddingMs);
    }
    const fromSilenceDurationMs = getValueByPath(fromObject, [
        'silenceDurationMs',
    ]);
    if (fromSilenceDurationMs != null) {
        setValueByPath(toObject, ['silenceDurationMs'], fromSilenceDurationMs);
    }
    return toObject;
}
function automaticActivityDetectionToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromDisabled = getValueByPath(fromObject, ['disabled']);
    if (fromDisabled != null) {
        setValueByPath(toObject, ['disabled'], fromDisabled);
    }
    const fromStartOfSpeechSensitivity = getValueByPath(fromObject, [
        'startOfSpeechSensitivity',
    ]);
    if (fromStartOfSpeechSensitivity != null) {
        setValueByPath(toObject, ['startOfSpeechSensitivity'], fromStartOfSpeechSensitivity);
    }
    const fromEndOfSpeechSensitivity = getValueByPath(fromObject, [
        'endOfSpeechSensitivity',
    ]);
    if (fromEndOfSpeechSensitivity != null) {
        setValueByPath(toObject, ['endOfSpeechSensitivity'], fromEndOfSpeechSensitivity);
    }
    const fromPrefixPaddingMs = getValueByPath(fromObject, [
        'prefixPaddingMs',
    ]);
    if (fromPrefixPaddingMs != null) {
        setValueByPath(toObject, ['prefixPaddingMs'], fromPrefixPaddingMs);
    }
    const fromSilenceDurationMs = getValueByPath(fromObject, [
        'silenceDurationMs',
    ]);
    if (fromSilenceDurationMs != null) {
        setValueByPath(toObject, ['silenceDurationMs'], fromSilenceDurationMs);
    }
    return toObject;
}
function realtimeInputConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromAutomaticActivityDetection = getValueByPath(fromObject, [
        'automaticActivityDetection',
    ]);
    if (fromAutomaticActivityDetection != null) {
        setValueByPath(toObject, ['automaticActivityDetection'], automaticActivityDetectionToMldev(apiClient, fromAutomaticActivityDetection));
    }
    const fromActivityHandling = getValueByPath(fromObject, [
        'activityHandling',
    ]);
    if (fromActivityHandling != null) {
        setValueByPath(toObject, ['activityHandling'], fromActivityHandling);
    }
    const fromTurnCoverage = getValueByPath(fromObject, ['turnCoverage']);
    if (fromTurnCoverage != null) {
        setValueByPath(toObject, ['turnCoverage'], fromTurnCoverage);
    }
    return toObject;
}
function realtimeInputConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromAutomaticActivityDetection = getValueByPath(fromObject, [
        'automaticActivityDetection',
    ]);
    if (fromAutomaticActivityDetection != null) {
        setValueByPath(toObject, ['automaticActivityDetection'], automaticActivityDetectionToVertex(apiClient, fromAutomaticActivityDetection));
    }
    const fromActivityHandling = getValueByPath(fromObject, [
        'activityHandling',
    ]);
    if (fromActivityHandling != null) {
        setValueByPath(toObject, ['activityHandling'], fromActivityHandling);
    }
    const fromTurnCoverage = getValueByPath(fromObject, ['turnCoverage']);
    if (fromTurnCoverage != null) {
        setValueByPath(toObject, ['turnCoverage'], fromTurnCoverage);
    }
    return toObject;
}
function slidingWindowToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromTargetTokens = getValueByPath(fromObject, ['targetTokens']);
    if (fromTargetTokens != null) {
        setValueByPath(toObject, ['targetTokens'], fromTargetTokens);
    }
    return toObject;
}
function slidingWindowToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromTargetTokens = getValueByPath(fromObject, ['targetTokens']);
    if (fromTargetTokens != null) {
        setValueByPath(toObject, ['targetTokens'], fromTargetTokens);
    }
    return toObject;
}
function contextWindowCompressionConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromTriggerTokens = getValueByPath(fromObject, [
        'triggerTokens',
    ]);
    if (fromTriggerTokens != null) {
        setValueByPath(toObject, ['triggerTokens'], fromTriggerTokens);
    }
    const fromSlidingWindow = getValueByPath(fromObject, [
        'slidingWindow',
    ]);
    if (fromSlidingWindow != null) {
        setValueByPath(toObject, ['slidingWindow'], slidingWindowToMldev(apiClient, fromSlidingWindow));
    }
    return toObject;
}
function contextWindowCompressionConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromTriggerTokens = getValueByPath(fromObject, [
        'triggerTokens',
    ]);
    if (fromTriggerTokens != null) {
        setValueByPath(toObject, ['triggerTokens'], fromTriggerTokens);
    }
    const fromSlidingWindow = getValueByPath(fromObject, [
        'slidingWindow',
    ]);
    if (fromSlidingWindow != null) {
        setValueByPath(toObject, ['slidingWindow'], slidingWindowToVertex(apiClient, fromSlidingWindow));
    }
    return toObject;
}
function liveConnectConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromGenerationConfig = getValueByPath(fromObject, [
        'generationConfig',
    ]);
    if (parentObject !== undefined && fromGenerationConfig != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig'], fromGenerationConfig);
    }
    const fromResponseModalities = getValueByPath(fromObject, [
        'responseModalities',
    ]);
    if (parentObject !== undefined && fromResponseModalities != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'responseModalities'], fromResponseModalities);
    }
    const fromTemperature = getValueByPath(fromObject, ['temperature']);
    if (parentObject !== undefined && fromTemperature != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'temperature'], fromTemperature);
    }
    const fromTopP = getValueByPath(fromObject, ['topP']);
    if (parentObject !== undefined && fromTopP != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'topP'], fromTopP);
    }
    const fromTopK = getValueByPath(fromObject, ['topK']);
    if (parentObject !== undefined && fromTopK != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'topK'], fromTopK);
    }
    const fromMaxOutputTokens = getValueByPath(fromObject, [
        'maxOutputTokens',
    ]);
    if (parentObject !== undefined && fromMaxOutputTokens != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'maxOutputTokens'], fromMaxOutputTokens);
    }
    const fromMediaResolution = getValueByPath(fromObject, [
        'mediaResolution',
    ]);
    if (parentObject !== undefined && fromMediaResolution != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'mediaResolution'], fromMediaResolution);
    }
    const fromSeed = getValueByPath(fromObject, ['seed']);
    if (parentObject !== undefined && fromSeed != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'seed'], fromSeed);
    }
    const fromSpeechConfig = getValueByPath(fromObject, ['speechConfig']);
    if (parentObject !== undefined && fromSpeechConfig != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'speechConfig'], fromSpeechConfig);
    }
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction',
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) {
        setValueByPath(parentObject, ['setup', 'systemInstruction'], contentToMldev$1(apiClient, tContent(apiClient, fromSystemInstruction)));
    }
    const fromTools = getValueByPath(fromObject, ['tools']);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = tTools(apiClient, fromTools);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return toolToMldev$1(apiClient, tTool(apiClient, item));
            });
        }
        setValueByPath(parentObject, ['setup', 'tools'], transformedList);
    }
    const fromSessionResumption = getValueByPath(fromObject, [
        'sessionResumption',
    ]);
    if (parentObject !== undefined && fromSessionResumption != null) {
        setValueByPath(parentObject, ['setup', 'sessionResumption'], sessionResumptionConfigToMldev(apiClient, fromSessionResumption));
    }
    const fromInputAudioTranscription = getValueByPath(fromObject, [
        'inputAudioTranscription',
    ]);
    if (parentObject !== undefined && fromInputAudioTranscription != null) {
        setValueByPath(parentObject, ['setup', 'inputAudioTranscription'], audioTranscriptionConfigToMldev());
    }
    const fromOutputAudioTranscription = getValueByPath(fromObject, [
        'outputAudioTranscription',
    ]);
    if (parentObject !== undefined && fromOutputAudioTranscription != null) {
        setValueByPath(parentObject, ['setup', 'outputAudioTranscription'], audioTranscriptionConfigToMldev());
    }
    const fromRealtimeInputConfig = getValueByPath(fromObject, [
        'realtimeInputConfig',
    ]);
    if (parentObject !== undefined && fromRealtimeInputConfig != null) {
        setValueByPath(parentObject, ['setup', 'realtimeInputConfig'], realtimeInputConfigToMldev(apiClient, fromRealtimeInputConfig));
    }
    const fromContextWindowCompression = getValueByPath(fromObject, [
        'contextWindowCompression',
    ]);
    if (parentObject !== undefined && fromContextWindowCompression != null) {
        setValueByPath(parentObject, ['setup', 'contextWindowCompression'], contextWindowCompressionConfigToMldev(apiClient, fromContextWindowCompression));
    }
    return toObject;
}
function liveConnectConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromGenerationConfig = getValueByPath(fromObject, [
        'generationConfig',
    ]);
    if (parentObject !== undefined && fromGenerationConfig != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig'], fromGenerationConfig);
    }
    const fromResponseModalities = getValueByPath(fromObject, [
        'responseModalities',
    ]);
    if (parentObject !== undefined && fromResponseModalities != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'responseModalities'], fromResponseModalities);
    }
    const fromTemperature = getValueByPath(fromObject, ['temperature']);
    if (parentObject !== undefined && fromTemperature != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'temperature'], fromTemperature);
    }
    const fromTopP = getValueByPath(fromObject, ['topP']);
    if (parentObject !== undefined && fromTopP != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'topP'], fromTopP);
    }
    const fromTopK = getValueByPath(fromObject, ['topK']);
    if (parentObject !== undefined && fromTopK != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'topK'], fromTopK);
    }
    const fromMaxOutputTokens = getValueByPath(fromObject, [
        'maxOutputTokens',
    ]);
    if (parentObject !== undefined && fromMaxOutputTokens != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'maxOutputTokens'], fromMaxOutputTokens);
    }
    const fromMediaResolution = getValueByPath(fromObject, [
        'mediaResolution',
    ]);
    if (parentObject !== undefined && fromMediaResolution != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'mediaResolution'], fromMediaResolution);
    }
    const fromSeed = getValueByPath(fromObject, ['seed']);
    if (parentObject !== undefined && fromSeed != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'seed'], fromSeed);
    }
    const fromSpeechConfig = getValueByPath(fromObject, ['speechConfig']);
    if (parentObject !== undefined && fromSpeechConfig != null) {
        setValueByPath(parentObject, ['setup', 'generationConfig', 'speechConfig'], fromSpeechConfig);
    }
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction',
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) {
        setValueByPath(parentObject, ['setup', 'systemInstruction'], contentToVertex$1(apiClient, tContent(apiClient, fromSystemInstruction)));
    }
    const fromTools = getValueByPath(fromObject, ['tools']);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = tTools(apiClient, fromTools);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return toolToVertex$1(apiClient, tTool(apiClient, item));
            });
        }
        setValueByPath(parentObject, ['setup', 'tools'], transformedList);
    }
    const fromSessionResumption = getValueByPath(fromObject, [
        'sessionResumption',
    ]);
    if (parentObject !== undefined && fromSessionResumption != null) {
        setValueByPath(parentObject, ['setup', 'sessionResumption'], sessionResumptionConfigToVertex(apiClient, fromSessionResumption));
    }
    const fromInputAudioTranscription = getValueByPath(fromObject, [
        'inputAudioTranscription',
    ]);
    if (parentObject !== undefined && fromInputAudioTranscription != null) {
        setValueByPath(parentObject, ['setup', 'inputAudioTranscription'], audioTranscriptionConfigToVertex());
    }
    const fromOutputAudioTranscription = getValueByPath(fromObject, [
        'outputAudioTranscription',
    ]);
    if (parentObject !== undefined && fromOutputAudioTranscription != null) {
        setValueByPath(parentObject, ['setup', 'outputAudioTranscription'], audioTranscriptionConfigToVertex());
    }
    const fromRealtimeInputConfig = getValueByPath(fromObject, [
        'realtimeInputConfig',
    ]);
    if (parentObject !== undefined && fromRealtimeInputConfig != null) {
        setValueByPath(parentObject, ['setup', 'realtimeInputConfig'], realtimeInputConfigToVertex(apiClient, fromRealtimeInputConfig));
    }
    const fromContextWindowCompression = getValueByPath(fromObject, [
        'contextWindowCompression',
    ]);
    if (parentObject !== undefined && fromContextWindowCompression != null) {
        setValueByPath(parentObject, ['setup', 'contextWindowCompression'], contextWindowCompressionConfigToVertex(apiClient, fromContextWindowCompression));
    }
    return toObject;
}
function liveConnectParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['setup', 'model'], tModel(apiClient, fromModel));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], liveConnectConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function liveConnectParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['setup', 'model'], tModel(apiClient, fromModel));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], liveConnectConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function activityStartToMldev() {
    const toObject = {};
    return toObject;
}
function activityStartToVertex() {
    const toObject = {};
    return toObject;
}
function activityEndToMldev() {
    const toObject = {};
    return toObject;
}
function activityEndToVertex() {
    const toObject = {};
    return toObject;
}
function liveSendRealtimeInputParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromMedia = getValueByPath(fromObject, ['media']);
    if (fromMedia != null) {
        setValueByPath(toObject, ['mediaChunks'], tBlobs(apiClient, fromMedia));
    }
    const fromAudio = getValueByPath(fromObject, ['audio']);
    if (fromAudio != null) {
        setValueByPath(toObject, ['audio'], tAudioBlob(apiClient, fromAudio));
    }
    const fromAudioStreamEnd = getValueByPath(fromObject, [
        'audioStreamEnd',
    ]);
    if (fromAudioStreamEnd != null) {
        setValueByPath(toObject, ['audioStreamEnd'], fromAudioStreamEnd);
    }
    const fromVideo = getValueByPath(fromObject, ['video']);
    if (fromVideo != null) {
        setValueByPath(toObject, ['video'], tImageBlob(apiClient, fromVideo));
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    const fromActivityStart = getValueByPath(fromObject, [
        'activityStart',
    ]);
    if (fromActivityStart != null) {
        setValueByPath(toObject, ['activityStart'], activityStartToMldev());
    }
    const fromActivityEnd = getValueByPath(fromObject, ['activityEnd']);
    if (fromActivityEnd != null) {
        setValueByPath(toObject, ['activityEnd'], activityEndToMldev());
    }
    return toObject;
}
function liveSendRealtimeInputParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromMedia = getValueByPath(fromObject, ['media']);
    if (fromMedia != null) {
        setValueByPath(toObject, ['mediaChunks'], tBlobs(apiClient, fromMedia));
    }
    if (getValueByPath(fromObject, ['audio']) !== undefined) {
        throw new Error('audio parameter is not supported in Vertex AI.');
    }
    const fromAudioStreamEnd = getValueByPath(fromObject, [
        'audioStreamEnd',
    ]);
    if (fromAudioStreamEnd != null) {
        setValueByPath(toObject, ['audioStreamEnd'], fromAudioStreamEnd);
    }
    if (getValueByPath(fromObject, ['video']) !== undefined) {
        throw new Error('video parameter is not supported in Vertex AI.');
    }
    if (getValueByPath(fromObject, ['text']) !== undefined) {
        throw new Error('text parameter is not supported in Vertex AI.');
    }
    const fromActivityStart = getValueByPath(fromObject, [
        'activityStart',
    ]);
    if (fromActivityStart != null) {
        setValueByPath(toObject, ['activityStart'], activityStartToVertex());
    }
    const fromActivityEnd = getValueByPath(fromObject, ['activityEnd']);
    if (fromActivityEnd != null) {
        setValueByPath(toObject, ['activityEnd'], activityEndToVertex());
    }
    return toObject;
}
function liveServerSetupCompleteFromMldev() {
    const toObject = {};
    return toObject;
}
function liveServerSetupCompleteFromVertex() {
    const toObject = {};
    return toObject;
}
function partFromMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromThought = getValueByPath(fromObject, ['thought']);
    if (fromThought != null) {
        setValueByPath(toObject, ['thought'], fromThought);
    }
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult',
    ]);
    if (fromCodeExecutionResult != null) {
        setValueByPath(toObject, ['codeExecutionResult'], fromCodeExecutionResult);
    }
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode',
    ]);
    if (fromExecutableCode != null) {
        setValueByPath(toObject, ['executableCode'], fromExecutableCode);
    }
    const fromFileData = getValueByPath(fromObject, ['fileData']);
    if (fromFileData != null) {
        setValueByPath(toObject, ['fileData'], fromFileData);
    }
    const fromFunctionCall = getValueByPath(fromObject, ['functionCall']);
    if (fromFunctionCall != null) {
        setValueByPath(toObject, ['functionCall'], fromFunctionCall);
    }
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse',
    ]);
    if (fromFunctionResponse != null) {
        setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
    }
    const fromInlineData = getValueByPath(fromObject, ['inlineData']);
    if (fromInlineData != null) {
        setValueByPath(toObject, ['inlineData'], fromInlineData);
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    return toObject;
}
function partFromVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata',
    ]);
    if (fromVideoMetadata != null) {
        setValueByPath(toObject, ['videoMetadata'], fromVideoMetadata);
    }
    const fromThought = getValueByPath(fromObject, ['thought']);
    if (fromThought != null) {
        setValueByPath(toObject, ['thought'], fromThought);
    }
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult',
    ]);
    if (fromCodeExecutionResult != null) {
        setValueByPath(toObject, ['codeExecutionResult'], fromCodeExecutionResult);
    }
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode',
    ]);
    if (fromExecutableCode != null) {
        setValueByPath(toObject, ['executableCode'], fromExecutableCode);
    }
    const fromFileData = getValueByPath(fromObject, ['fileData']);
    if (fromFileData != null) {
        setValueByPath(toObject, ['fileData'], fromFileData);
    }
    const fromFunctionCall = getValueByPath(fromObject, ['functionCall']);
    if (fromFunctionCall != null) {
        setValueByPath(toObject, ['functionCall'], fromFunctionCall);
    }
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse',
    ]);
    if (fromFunctionResponse != null) {
        setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
    }
    const fromInlineData = getValueByPath(fromObject, ['inlineData']);
    if (fromInlineData != null) {
        setValueByPath(toObject, ['inlineData'], fromInlineData);
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    return toObject;
}
function contentFromMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, ['parts']);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return partFromMldev$1(apiClient, item);
            });
        }
        setValueByPath(toObject, ['parts'], transformedList);
    }
    const fromRole = getValueByPath(fromObject, ['role']);
    if (fromRole != null) {
        setValueByPath(toObject, ['role'], fromRole);
    }
    return toObject;
}
function contentFromVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, ['parts']);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return partFromVertex$1(apiClient, item);
            });
        }
        setValueByPath(toObject, ['parts'], transformedList);
    }
    const fromRole = getValueByPath(fromObject, ['role']);
    if (fromRole != null) {
        setValueByPath(toObject, ['role'], fromRole);
    }
    return toObject;
}
function transcriptionFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    const fromFinished = getValueByPath(fromObject, ['finished']);
    if (fromFinished != null) {
        setValueByPath(toObject, ['finished'], fromFinished);
    }
    return toObject;
}
function transcriptionFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    const fromFinished = getValueByPath(fromObject, ['finished']);
    if (fromFinished != null) {
        setValueByPath(toObject, ['finished'], fromFinished);
    }
    return toObject;
}
function liveServerContentFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModelTurn = getValueByPath(fromObject, ['modelTurn']);
    if (fromModelTurn != null) {
        setValueByPath(toObject, ['modelTurn'], contentFromMldev$1(apiClient, fromModelTurn));
    }
    const fromTurnComplete = getValueByPath(fromObject, ['turnComplete']);
    if (fromTurnComplete != null) {
        setValueByPath(toObject, ['turnComplete'], fromTurnComplete);
    }
    const fromInterrupted = getValueByPath(fromObject, ['interrupted']);
    if (fromInterrupted != null) {
        setValueByPath(toObject, ['interrupted'], fromInterrupted);
    }
    const fromGroundingMetadata = getValueByPath(fromObject, [
        'groundingMetadata',
    ]);
    if (fromGroundingMetadata != null) {
        setValueByPath(toObject, ['groundingMetadata'], fromGroundingMetadata);
    }
    const fromGenerationComplete = getValueByPath(fromObject, [
        'generationComplete',
    ]);
    if (fromGenerationComplete != null) {
        setValueByPath(toObject, ['generationComplete'], fromGenerationComplete);
    }
    const fromInputTranscription = getValueByPath(fromObject, [
        'inputTranscription',
    ]);
    if (fromInputTranscription != null) {
        setValueByPath(toObject, ['inputTranscription'], transcriptionFromMldev(apiClient, fromInputTranscription));
    }
    const fromOutputTranscription = getValueByPath(fromObject, [
        'outputTranscription',
    ]);
    if (fromOutputTranscription != null) {
        setValueByPath(toObject, ['outputTranscription'], transcriptionFromMldev(apiClient, fromOutputTranscription));
    }
    return toObject;
}
function liveServerContentFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModelTurn = getValueByPath(fromObject, ['modelTurn']);
    if (fromModelTurn != null) {
        setValueByPath(toObject, ['modelTurn'], contentFromVertex$1(apiClient, fromModelTurn));
    }
    const fromTurnComplete = getValueByPath(fromObject, ['turnComplete']);
    if (fromTurnComplete != null) {
        setValueByPath(toObject, ['turnComplete'], fromTurnComplete);
    }
    const fromInterrupted = getValueByPath(fromObject, ['interrupted']);
    if (fromInterrupted != null) {
        setValueByPath(toObject, ['interrupted'], fromInterrupted);
    }
    const fromGroundingMetadata = getValueByPath(fromObject, [
        'groundingMetadata',
    ]);
    if (fromGroundingMetadata != null) {
        setValueByPath(toObject, ['groundingMetadata'], fromGroundingMetadata);
    }
    const fromGenerationComplete = getValueByPath(fromObject, [
        'generationComplete',
    ]);
    if (fromGenerationComplete != null) {
        setValueByPath(toObject, ['generationComplete'], fromGenerationComplete);
    }
    const fromInputTranscription = getValueByPath(fromObject, [
        'inputTranscription',
    ]);
    if (fromInputTranscription != null) {
        setValueByPath(toObject, ['inputTranscription'], transcriptionFromVertex(apiClient, fromInputTranscription));
    }
    const fromOutputTranscription = getValueByPath(fromObject, [
        'outputTranscription',
    ]);
    if (fromOutputTranscription != null) {
        setValueByPath(toObject, ['outputTranscription'], transcriptionFromVertex(apiClient, fromOutputTranscription));
    }
    return toObject;
}
function functionCallFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromId = getValueByPath(fromObject, ['id']);
    if (fromId != null) {
        setValueByPath(toObject, ['id'], fromId);
    }
    const fromArgs = getValueByPath(fromObject, ['args']);
    if (fromArgs != null) {
        setValueByPath(toObject, ['args'], fromArgs);
    }
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    return toObject;
}
function functionCallFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromArgs = getValueByPath(fromObject, ['args']);
    if (fromArgs != null) {
        setValueByPath(toObject, ['args'], fromArgs);
    }
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    return toObject;
}
function liveServerToolCallFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromFunctionCalls = getValueByPath(fromObject, [
        'functionCalls',
    ]);
    if (fromFunctionCalls != null) {
        let transformedList = fromFunctionCalls;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return functionCallFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['functionCalls'], transformedList);
    }
    return toObject;
}
function liveServerToolCallFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromFunctionCalls = getValueByPath(fromObject, [
        'functionCalls',
    ]);
    if (fromFunctionCalls != null) {
        let transformedList = fromFunctionCalls;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return functionCallFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['functionCalls'], transformedList);
    }
    return toObject;
}
function liveServerToolCallCancellationFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromIds = getValueByPath(fromObject, ['ids']);
    if (fromIds != null) {
        setValueByPath(toObject, ['ids'], fromIds);
    }
    return toObject;
}
function liveServerToolCallCancellationFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromIds = getValueByPath(fromObject, ['ids']);
    if (fromIds != null) {
        setValueByPath(toObject, ['ids'], fromIds);
    }
    return toObject;
}
function modalityTokenCountFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModality = getValueByPath(fromObject, ['modality']);
    if (fromModality != null) {
        setValueByPath(toObject, ['modality'], fromModality);
    }
    const fromTokenCount = getValueByPath(fromObject, ['tokenCount']);
    if (fromTokenCount != null) {
        setValueByPath(toObject, ['tokenCount'], fromTokenCount);
    }
    return toObject;
}
function modalityTokenCountFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModality = getValueByPath(fromObject, ['modality']);
    if (fromModality != null) {
        setValueByPath(toObject, ['modality'], fromModality);
    }
    const fromTokenCount = getValueByPath(fromObject, ['tokenCount']);
    if (fromTokenCount != null) {
        setValueByPath(toObject, ['tokenCount'], fromTokenCount);
    }
    return toObject;
}
function usageMetadataFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromPromptTokenCount = getValueByPath(fromObject, [
        'promptTokenCount',
    ]);
    if (fromPromptTokenCount != null) {
        setValueByPath(toObject, ['promptTokenCount'], fromPromptTokenCount);
    }
    const fromCachedContentTokenCount = getValueByPath(fromObject, [
        'cachedContentTokenCount',
    ]);
    if (fromCachedContentTokenCount != null) {
        setValueByPath(toObject, ['cachedContentTokenCount'], fromCachedContentTokenCount);
    }
    const fromResponseTokenCount = getValueByPath(fromObject, [
        'responseTokenCount',
    ]);
    if (fromResponseTokenCount != null) {
        setValueByPath(toObject, ['responseTokenCount'], fromResponseTokenCount);
    }
    const fromToolUsePromptTokenCount = getValueByPath(fromObject, [
        'toolUsePromptTokenCount',
    ]);
    if (fromToolUsePromptTokenCount != null) {
        setValueByPath(toObject, ['toolUsePromptTokenCount'], fromToolUsePromptTokenCount);
    }
    const fromThoughtsTokenCount = getValueByPath(fromObject, [
        'thoughtsTokenCount',
    ]);
    if (fromThoughtsTokenCount != null) {
        setValueByPath(toObject, ['thoughtsTokenCount'], fromThoughtsTokenCount);
    }
    const fromTotalTokenCount = getValueByPath(fromObject, [
        'totalTokenCount',
    ]);
    if (fromTotalTokenCount != null) {
        setValueByPath(toObject, ['totalTokenCount'], fromTotalTokenCount);
    }
    const fromPromptTokensDetails = getValueByPath(fromObject, [
        'promptTokensDetails',
    ]);
    if (fromPromptTokensDetails != null) {
        let transformedList = fromPromptTokensDetails;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return modalityTokenCountFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['promptTokensDetails'], transformedList);
    }
    const fromCacheTokensDetails = getValueByPath(fromObject, [
        'cacheTokensDetails',
    ]);
    if (fromCacheTokensDetails != null) {
        let transformedList = fromCacheTokensDetails;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return modalityTokenCountFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['cacheTokensDetails'], transformedList);
    }
    const fromResponseTokensDetails = getValueByPath(fromObject, [
        'responseTokensDetails',
    ]);
    if (fromResponseTokensDetails != null) {
        let transformedList = fromResponseTokensDetails;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return modalityTokenCountFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['responseTokensDetails'], transformedList);
    }
    const fromToolUsePromptTokensDetails = getValueByPath(fromObject, [
        'toolUsePromptTokensDetails',
    ]);
    if (fromToolUsePromptTokensDetails != null) {
        let transformedList = fromToolUsePromptTokensDetails;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return modalityTokenCountFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['toolUsePromptTokensDetails'], transformedList);
    }
    return toObject;
}
function usageMetadataFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromPromptTokenCount = getValueByPath(fromObject, [
        'promptTokenCount',
    ]);
    if (fromPromptTokenCount != null) {
        setValueByPath(toObject, ['promptTokenCount'], fromPromptTokenCount);
    }
    const fromCachedContentTokenCount = getValueByPath(fromObject, [
        'cachedContentTokenCount',
    ]);
    if (fromCachedContentTokenCount != null) {
        setValueByPath(toObject, ['cachedContentTokenCount'], fromCachedContentTokenCount);
    }
    const fromResponseTokenCount = getValueByPath(fromObject, [
        'candidatesTokenCount',
    ]);
    if (fromResponseTokenCount != null) {
        setValueByPath(toObject, ['responseTokenCount'], fromResponseTokenCount);
    }
    const fromToolUsePromptTokenCount = getValueByPath(fromObject, [
        'toolUsePromptTokenCount',
    ]);
    if (fromToolUsePromptTokenCount != null) {
        setValueByPath(toObject, ['toolUsePromptTokenCount'], fromToolUsePromptTokenCount);
    }
    const fromThoughtsTokenCount = getValueByPath(fromObject, [
        'thoughtsTokenCount',
    ]);
    if (fromThoughtsTokenCount != null) {
        setValueByPath(toObject, ['thoughtsTokenCount'], fromThoughtsTokenCount);
    }
    const fromTotalTokenCount = getValueByPath(fromObject, [
        'totalTokenCount',
    ]);
    if (fromTotalTokenCount != null) {
        setValueByPath(toObject, ['totalTokenCount'], fromTotalTokenCount);
    }
    const fromPromptTokensDetails = getValueByPath(fromObject, [
        'promptTokensDetails',
    ]);
    if (fromPromptTokensDetails != null) {
        let transformedList = fromPromptTokensDetails;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return modalityTokenCountFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['promptTokensDetails'], transformedList);
    }
    const fromCacheTokensDetails = getValueByPath(fromObject, [
        'cacheTokensDetails',
    ]);
    if (fromCacheTokensDetails != null) {
        let transformedList = fromCacheTokensDetails;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return modalityTokenCountFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['cacheTokensDetails'], transformedList);
    }
    const fromResponseTokensDetails = getValueByPath(fromObject, [
        'candidatesTokensDetails',
    ]);
    if (fromResponseTokensDetails != null) {
        let transformedList = fromResponseTokensDetails;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return modalityTokenCountFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['responseTokensDetails'], transformedList);
    }
    const fromToolUsePromptTokensDetails = getValueByPath(fromObject, [
        'toolUsePromptTokensDetails',
    ]);
    if (fromToolUsePromptTokensDetails != null) {
        let transformedList = fromToolUsePromptTokensDetails;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return modalityTokenCountFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['toolUsePromptTokensDetails'], transformedList);
    }
    const fromTrafficType = getValueByPath(fromObject, ['trafficType']);
    if (fromTrafficType != null) {
        setValueByPath(toObject, ['trafficType'], fromTrafficType);
    }
    return toObject;
}
function liveServerGoAwayFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromTimeLeft = getValueByPath(fromObject, ['timeLeft']);
    if (fromTimeLeft != null) {
        setValueByPath(toObject, ['timeLeft'], fromTimeLeft);
    }
    return toObject;
}
function liveServerGoAwayFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromTimeLeft = getValueByPath(fromObject, ['timeLeft']);
    if (fromTimeLeft != null) {
        setValueByPath(toObject, ['timeLeft'], fromTimeLeft);
    }
    return toObject;
}
function liveServerSessionResumptionUpdateFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromNewHandle = getValueByPath(fromObject, ['newHandle']);
    if (fromNewHandle != null) {
        setValueByPath(toObject, ['newHandle'], fromNewHandle);
    }
    const fromResumable = getValueByPath(fromObject, ['resumable']);
    if (fromResumable != null) {
        setValueByPath(toObject, ['resumable'], fromResumable);
    }
    const fromLastConsumedClientMessageIndex = getValueByPath(fromObject, [
        'lastConsumedClientMessageIndex',
    ]);
    if (fromLastConsumedClientMessageIndex != null) {
        setValueByPath(toObject, ['lastConsumedClientMessageIndex'], fromLastConsumedClientMessageIndex);
    }
    return toObject;
}
function liveServerSessionResumptionUpdateFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromNewHandle = getValueByPath(fromObject, ['newHandle']);
    if (fromNewHandle != null) {
        setValueByPath(toObject, ['newHandle'], fromNewHandle);
    }
    const fromResumable = getValueByPath(fromObject, ['resumable']);
    if (fromResumable != null) {
        setValueByPath(toObject, ['resumable'], fromResumable);
    }
    const fromLastConsumedClientMessageIndex = getValueByPath(fromObject, [
        'lastConsumedClientMessageIndex',
    ]);
    if (fromLastConsumedClientMessageIndex != null) {
        setValueByPath(toObject, ['lastConsumedClientMessageIndex'], fromLastConsumedClientMessageIndex);
    }
    return toObject;
}
function liveServerMessageFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromSetupComplete = getValueByPath(fromObject, [
        'setupComplete',
    ]);
    if (fromSetupComplete != null) {
        setValueByPath(toObject, ['setupComplete'], liveServerSetupCompleteFromMldev());
    }
    const fromServerContent = getValueByPath(fromObject, [
        'serverContent',
    ]);
    if (fromServerContent != null) {
        setValueByPath(toObject, ['serverContent'], liveServerContentFromMldev(apiClient, fromServerContent));
    }
    const fromToolCall = getValueByPath(fromObject, ['toolCall']);
    if (fromToolCall != null) {
        setValueByPath(toObject, ['toolCall'], liveServerToolCallFromMldev(apiClient, fromToolCall));
    }
    const fromToolCallCancellation = getValueByPath(fromObject, [
        'toolCallCancellation',
    ]);
    if (fromToolCallCancellation != null) {
        setValueByPath(toObject, ['toolCallCancellation'], liveServerToolCallCancellationFromMldev(apiClient, fromToolCallCancellation));
    }
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata',
    ]);
    if (fromUsageMetadata != null) {
        setValueByPath(toObject, ['usageMetadata'], usageMetadataFromMldev(apiClient, fromUsageMetadata));
    }
    const fromGoAway = getValueByPath(fromObject, ['goAway']);
    if (fromGoAway != null) {
        setValueByPath(toObject, ['goAway'], liveServerGoAwayFromMldev(apiClient, fromGoAway));
    }
    const fromSessionResumptionUpdate = getValueByPath(fromObject, [
        'sessionResumptionUpdate',
    ]);
    if (fromSessionResumptionUpdate != null) {
        setValueByPath(toObject, ['sessionResumptionUpdate'], liveServerSessionResumptionUpdateFromMldev(apiClient, fromSessionResumptionUpdate));
    }
    return toObject;
}
function liveServerMessageFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromSetupComplete = getValueByPath(fromObject, [
        'setupComplete',
    ]);
    if (fromSetupComplete != null) {
        setValueByPath(toObject, ['setupComplete'], liveServerSetupCompleteFromVertex());
    }
    const fromServerContent = getValueByPath(fromObject, [
        'serverContent',
    ]);
    if (fromServerContent != null) {
        setValueByPath(toObject, ['serverContent'], liveServerContentFromVertex(apiClient, fromServerContent));
    }
    const fromToolCall = getValueByPath(fromObject, ['toolCall']);
    if (fromToolCall != null) {
        setValueByPath(toObject, ['toolCall'], liveServerToolCallFromVertex(apiClient, fromToolCall));
    }
    const fromToolCallCancellation = getValueByPath(fromObject, [
        'toolCallCancellation',
    ]);
    if (fromToolCallCancellation != null) {
        setValueByPath(toObject, ['toolCallCancellation'], liveServerToolCallCancellationFromVertex(apiClient, fromToolCallCancellation));
    }
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata',
    ]);
    if (fromUsageMetadata != null) {
        setValueByPath(toObject, ['usageMetadata'], usageMetadataFromVertex(apiClient, fromUsageMetadata));
    }
    const fromGoAway = getValueByPath(fromObject, ['goAway']);
    if (fromGoAway != null) {
        setValueByPath(toObject, ['goAway'], liveServerGoAwayFromVertex(apiClient, fromGoAway));
    }
    const fromSessionResumptionUpdate = getValueByPath(fromObject, [
        'sessionResumptionUpdate',
    ]);
    if (fromSessionResumptionUpdate != null) {
        setValueByPath(toObject, ['sessionResumptionUpdate'], liveServerSessionResumptionUpdateFromVertex(apiClient, fromSessionResumptionUpdate));
    }
    return toObject;
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function partToMldev(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['videoMetadata']) !== undefined) {
        throw new Error('videoMetadata parameter is not supported in Gemini API.');
    }
    const fromThought = getValueByPath(fromObject, ['thought']);
    if (fromThought != null) {
        setValueByPath(toObject, ['thought'], fromThought);
    }
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult',
    ]);
    if (fromCodeExecutionResult != null) {
        setValueByPath(toObject, ['codeExecutionResult'], fromCodeExecutionResult);
    }
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode',
    ]);
    if (fromExecutableCode != null) {
        setValueByPath(toObject, ['executableCode'], fromExecutableCode);
    }
    const fromFileData = getValueByPath(fromObject, ['fileData']);
    if (fromFileData != null) {
        setValueByPath(toObject, ['fileData'], fromFileData);
    }
    const fromFunctionCall = getValueByPath(fromObject, ['functionCall']);
    if (fromFunctionCall != null) {
        setValueByPath(toObject, ['functionCall'], fromFunctionCall);
    }
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse',
    ]);
    if (fromFunctionResponse != null) {
        setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
    }
    const fromInlineData = getValueByPath(fromObject, ['inlineData']);
    if (fromInlineData != null) {
        setValueByPath(toObject, ['inlineData'], fromInlineData);
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    return toObject;
}
function contentToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, ['parts']);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return partToMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['parts'], transformedList);
    }
    const fromRole = getValueByPath(fromObject, ['role']);
    if (fromRole != null) {
        setValueByPath(toObject, ['role'], fromRole);
    }
    return toObject;
}
function safetySettingToMldev(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['method']) !== undefined) {
        throw new Error('method parameter is not supported in Gemini API.');
    }
    const fromCategory = getValueByPath(fromObject, ['category']);
    if (fromCategory != null) {
        setValueByPath(toObject, ['category'], fromCategory);
    }
    const fromThreshold = getValueByPath(fromObject, ['threshold']);
    if (fromThreshold != null) {
        setValueByPath(toObject, ['threshold'], fromThreshold);
    }
    return toObject;
}
function googleSearchToMldev() {
    const toObject = {};
    return toObject;
}
function dynamicRetrievalConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, ['mode']);
    if (fromMode != null) {
        setValueByPath(toObject, ['mode'], fromMode);
    }
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold',
    ]);
    if (fromDynamicThreshold != null) {
        setValueByPath(toObject, ['dynamicThreshold'], fromDynamicThreshold);
    }
    return toObject;
}
function googleSearchRetrievalToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig',
    ]);
    if (fromDynamicRetrievalConfig != null) {
        setValueByPath(toObject, ['dynamicRetrievalConfig'], dynamicRetrievalConfigToMldev(apiClient, fromDynamicRetrievalConfig));
    }
    return toObject;
}
function toolToMldev(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['retrieval']) !== undefined) {
        throw new Error('retrieval parameter is not supported in Gemini API.');
    }
    const fromGoogleSearch = getValueByPath(fromObject, ['googleSearch']);
    if (fromGoogleSearch != null) {
        setValueByPath(toObject, ['googleSearch'], googleSearchToMldev());
    }
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval',
    ]);
    if (fromGoogleSearchRetrieval != null) {
        setValueByPath(toObject, ['googleSearchRetrieval'], googleSearchRetrievalToMldev(apiClient, fromGoogleSearchRetrieval));
    }
    if (getValueByPath(fromObject, ['enterpriseWebSearch']) !== undefined) {
        throw new Error('enterpriseWebSearch parameter is not supported in Gemini API.');
    }
    if (getValueByPath(fromObject, ['googleMaps']) !== undefined) {
        throw new Error('googleMaps parameter is not supported in Gemini API.');
    }
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution',
    ]);
    if (fromCodeExecution != null) {
        setValueByPath(toObject, ['codeExecution'], fromCodeExecution);
    }
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations',
    ]);
    if (fromFunctionDeclarations != null) {
        setValueByPath(toObject, ['functionDeclarations'], fromFunctionDeclarations);
    }
    return toObject;
}
function functionCallingConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, ['mode']);
    if (fromMode != null) {
        setValueByPath(toObject, ['mode'], fromMode);
    }
    const fromAllowedFunctionNames = getValueByPath(fromObject, [
        'allowedFunctionNames',
    ]);
    if (fromAllowedFunctionNames != null) {
        setValueByPath(toObject, ['allowedFunctionNames'], fromAllowedFunctionNames);
    }
    return toObject;
}
function toolConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromFunctionCallingConfig = getValueByPath(fromObject, [
        'functionCallingConfig',
    ]);
    if (fromFunctionCallingConfig != null) {
        setValueByPath(toObject, ['functionCallingConfig'], functionCallingConfigToMldev(apiClient, fromFunctionCallingConfig));
    }
    if (getValueByPath(fromObject, ['retrievalConfig']) !== undefined) {
        throw new Error('retrievalConfig parameter is not supported in Gemini API.');
    }
    return toObject;
}
function prebuiltVoiceConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromVoiceName = getValueByPath(fromObject, ['voiceName']);
    if (fromVoiceName != null) {
        setValueByPath(toObject, ['voiceName'], fromVoiceName);
    }
    return toObject;
}
function voiceConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
        'prebuiltVoiceConfig',
    ]);
    if (fromPrebuiltVoiceConfig != null) {
        setValueByPath(toObject, ['prebuiltVoiceConfig'], prebuiltVoiceConfigToMldev(apiClient, fromPrebuiltVoiceConfig));
    }
    return toObject;
}
function speechConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromVoiceConfig = getValueByPath(fromObject, ['voiceConfig']);
    if (fromVoiceConfig != null) {
        setValueByPath(toObject, ['voiceConfig'], voiceConfigToMldev(apiClient, fromVoiceConfig));
    }
    const fromLanguageCode = getValueByPath(fromObject, ['languageCode']);
    if (fromLanguageCode != null) {
        setValueByPath(toObject, ['languageCode'], fromLanguageCode);
    }
    return toObject;
}
function thinkingConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromIncludeThoughts = getValueByPath(fromObject, [
        'includeThoughts',
    ]);
    if (fromIncludeThoughts != null) {
        setValueByPath(toObject, ['includeThoughts'], fromIncludeThoughts);
    }
    const fromThinkingBudget = getValueByPath(fromObject, [
        'thinkingBudget',
    ]);
    if (fromThinkingBudget != null) {
        setValueByPath(toObject, ['thinkingBudget'], fromThinkingBudget);
    }
    return toObject;
}
function generateContentConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction',
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) {
        setValueByPath(parentObject, ['systemInstruction'], contentToMldev(apiClient, tContent(apiClient, fromSystemInstruction)));
    }
    const fromTemperature = getValueByPath(fromObject, ['temperature']);
    if (fromTemperature != null) {
        setValueByPath(toObject, ['temperature'], fromTemperature);
    }
    const fromTopP = getValueByPath(fromObject, ['topP']);
    if (fromTopP != null) {
        setValueByPath(toObject, ['topP'], fromTopP);
    }
    const fromTopK = getValueByPath(fromObject, ['topK']);
    if (fromTopK != null) {
        setValueByPath(toObject, ['topK'], fromTopK);
    }
    const fromCandidateCount = getValueByPath(fromObject, [
        'candidateCount',
    ]);
    if (fromCandidateCount != null) {
        setValueByPath(toObject, ['candidateCount'], fromCandidateCount);
    }
    const fromMaxOutputTokens = getValueByPath(fromObject, [
        'maxOutputTokens',
    ]);
    if (fromMaxOutputTokens != null) {
        setValueByPath(toObject, ['maxOutputTokens'], fromMaxOutputTokens);
    }
    const fromStopSequences = getValueByPath(fromObject, [
        'stopSequences',
    ]);
    if (fromStopSequences != null) {
        setValueByPath(toObject, ['stopSequences'], fromStopSequences);
    }
    const fromResponseLogprobs = getValueByPath(fromObject, [
        'responseLogprobs',
    ]);
    if (fromResponseLogprobs != null) {
        setValueByPath(toObject, ['responseLogprobs'], fromResponseLogprobs);
    }
    const fromLogprobs = getValueByPath(fromObject, ['logprobs']);
    if (fromLogprobs != null) {
        setValueByPath(toObject, ['logprobs'], fromLogprobs);
    }
    const fromPresencePenalty = getValueByPath(fromObject, [
        'presencePenalty',
    ]);
    if (fromPresencePenalty != null) {
        setValueByPath(toObject, ['presencePenalty'], fromPresencePenalty);
    }
    const fromFrequencyPenalty = getValueByPath(fromObject, [
        'frequencyPenalty',
    ]);
    if (fromFrequencyPenalty != null) {
        setValueByPath(toObject, ['frequencyPenalty'], fromFrequencyPenalty);
    }
    const fromSeed = getValueByPath(fromObject, ['seed']);
    if (fromSeed != null) {
        setValueByPath(toObject, ['seed'], fromSeed);
    }
    const fromResponseMimeType = getValueByPath(fromObject, [
        'responseMimeType',
    ]);
    if (fromResponseMimeType != null) {
        setValueByPath(toObject, ['responseMimeType'], fromResponseMimeType);
    }
    const fromResponseSchema = getValueByPath(fromObject, [
        'responseSchema',
    ]);
    if (fromResponseSchema != null) {
        setValueByPath(toObject, ['responseSchema'], tSchema(apiClient, fromResponseSchema));
    }
    if (getValueByPath(fromObject, ['routingConfig']) !== undefined) {
        throw new Error('routingConfig parameter is not supported in Gemini API.');
    }
    if (getValueByPath(fromObject, ['modelSelectionConfig']) !== undefined) {
        throw new Error('modelSelectionConfig parameter is not supported in Gemini API.');
    }
    const fromSafetySettings = getValueByPath(fromObject, [
        'safetySettings',
    ]);
    if (parentObject !== undefined && fromSafetySettings != null) {
        let transformedList = fromSafetySettings;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return safetySettingToMldev(apiClient, item);
            });
        }
        setValueByPath(parentObject, ['safetySettings'], transformedList);
    }
    const fromTools = getValueByPath(fromObject, ['tools']);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = tTools(apiClient, fromTools);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return toolToMldev(apiClient, tTool(apiClient, item));
            });
        }
        setValueByPath(parentObject, ['tools'], transformedList);
    }
    const fromToolConfig = getValueByPath(fromObject, ['toolConfig']);
    if (parentObject !== undefined && fromToolConfig != null) {
        setValueByPath(parentObject, ['toolConfig'], toolConfigToMldev(apiClient, fromToolConfig));
    }
    if (getValueByPath(fromObject, ['labels']) !== undefined) {
        throw new Error('labels parameter is not supported in Gemini API.');
    }
    const fromCachedContent = getValueByPath(fromObject, [
        'cachedContent',
    ]);
    if (parentObject !== undefined && fromCachedContent != null) {
        setValueByPath(parentObject, ['cachedContent'], tCachedContentName(apiClient, fromCachedContent));
    }
    const fromResponseModalities = getValueByPath(fromObject, [
        'responseModalities',
    ]);
    if (fromResponseModalities != null) {
        setValueByPath(toObject, ['responseModalities'], fromResponseModalities);
    }
    const fromMediaResolution = getValueByPath(fromObject, [
        'mediaResolution',
    ]);
    if (fromMediaResolution != null) {
        setValueByPath(toObject, ['mediaResolution'], fromMediaResolution);
    }
    const fromSpeechConfig = getValueByPath(fromObject, ['speechConfig']);
    if (fromSpeechConfig != null) {
        setValueByPath(toObject, ['speechConfig'], speechConfigToMldev(apiClient, tSpeechConfig(apiClient, fromSpeechConfig)));
    }
    if (getValueByPath(fromObject, ['audioTimestamp']) !== undefined) {
        throw new Error('audioTimestamp parameter is not supported in Gemini API.');
    }
    const fromThinkingConfig = getValueByPath(fromObject, [
        'thinkingConfig',
    ]);
    if (fromThinkingConfig != null) {
        setValueByPath(toObject, ['thinkingConfig'], thinkingConfigToMldev(apiClient, fromThinkingConfig));
    }
    return toObject;
}
function generateContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromContents = getValueByPath(fromObject, ['contents']);
    if (fromContents != null) {
        let transformedList = tContents(apiClient, fromContents);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return contentToMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['contents'], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['generationConfig'], generateContentConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function embedContentConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromTaskType = getValueByPath(fromObject, ['taskType']);
    if (parentObject !== undefined && fromTaskType != null) {
        setValueByPath(parentObject, ['requests[]', 'taskType'], fromTaskType);
    }
    const fromTitle = getValueByPath(fromObject, ['title']);
    if (parentObject !== undefined && fromTitle != null) {
        setValueByPath(parentObject, ['requests[]', 'title'], fromTitle);
    }
    const fromOutputDimensionality = getValueByPath(fromObject, [
        'outputDimensionality',
    ]);
    if (parentObject !== undefined && fromOutputDimensionality != null) {
        setValueByPath(parentObject, ['requests[]', 'outputDimensionality'], fromOutputDimensionality);
    }
    if (getValueByPath(fromObject, ['mimeType']) !== undefined) {
        throw new Error('mimeType parameter is not supported in Gemini API.');
    }
    if (getValueByPath(fromObject, ['autoTruncate']) !== undefined) {
        throw new Error('autoTruncate parameter is not supported in Gemini API.');
    }
    return toObject;
}
function embedContentParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromContents = getValueByPath(fromObject, ['contents']);
    if (fromContents != null) {
        setValueByPath(toObject, ['requests[]', 'content'], tContentsForEmbed(apiClient, fromContents));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], embedContentConfigToMldev(apiClient, fromConfig, toObject));
    }
    const fromModelForEmbedContent = getValueByPath(fromObject, ['model']);
    if (fromModelForEmbedContent !== undefined) {
        setValueByPath(toObject, ['requests[]', 'model'], tModel(apiClient, fromModelForEmbedContent));
    }
    return toObject;
}
function generateImagesConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['outputGcsUri']) !== undefined) {
        throw new Error('outputGcsUri parameter is not supported in Gemini API.');
    }
    if (getValueByPath(fromObject, ['negativePrompt']) !== undefined) {
        throw new Error('negativePrompt parameter is not supported in Gemini API.');
    }
    const fromNumberOfImages = getValueByPath(fromObject, [
        'numberOfImages',
    ]);
    if (parentObject !== undefined && fromNumberOfImages != null) {
        setValueByPath(parentObject, ['parameters', 'sampleCount'], fromNumberOfImages);
    }
    const fromAspectRatio = getValueByPath(fromObject, ['aspectRatio']);
    if (parentObject !== undefined && fromAspectRatio != null) {
        setValueByPath(parentObject, ['parameters', 'aspectRatio'], fromAspectRatio);
    }
    const fromGuidanceScale = getValueByPath(fromObject, [
        'guidanceScale',
    ]);
    if (parentObject !== undefined && fromGuidanceScale != null) {
        setValueByPath(parentObject, ['parameters', 'guidanceScale'], fromGuidanceScale);
    }
    if (getValueByPath(fromObject, ['seed']) !== undefined) {
        throw new Error('seed parameter is not supported in Gemini API.');
    }
    const fromSafetyFilterLevel = getValueByPath(fromObject, [
        'safetyFilterLevel',
    ]);
    if (parentObject !== undefined && fromSafetyFilterLevel != null) {
        setValueByPath(parentObject, ['parameters', 'safetySetting'], fromSafetyFilterLevel);
    }
    const fromPersonGeneration = getValueByPath(fromObject, [
        'personGeneration',
    ]);
    if (parentObject !== undefined && fromPersonGeneration != null) {
        setValueByPath(parentObject, ['parameters', 'personGeneration'], fromPersonGeneration);
    }
    const fromIncludeSafetyAttributes = getValueByPath(fromObject, [
        'includeSafetyAttributes',
    ]);
    if (parentObject !== undefined && fromIncludeSafetyAttributes != null) {
        setValueByPath(parentObject, ['parameters', 'includeSafetyAttributes'], fromIncludeSafetyAttributes);
    }
    const fromIncludeRaiReason = getValueByPath(fromObject, [
        'includeRaiReason',
    ]);
    if (parentObject !== undefined && fromIncludeRaiReason != null) {
        setValueByPath(parentObject, ['parameters', 'includeRaiReason'], fromIncludeRaiReason);
    }
    const fromLanguage = getValueByPath(fromObject, ['language']);
    if (parentObject !== undefined && fromLanguage != null) {
        setValueByPath(parentObject, ['parameters', 'language'], fromLanguage);
    }
    const fromOutputMimeType = getValueByPath(fromObject, [
        'outputMimeType',
    ]);
    if (parentObject !== undefined && fromOutputMimeType != null) {
        setValueByPath(parentObject, ['parameters', 'outputOptions', 'mimeType'], fromOutputMimeType);
    }
    const fromOutputCompressionQuality = getValueByPath(fromObject, [
        'outputCompressionQuality',
    ]);
    if (parentObject !== undefined && fromOutputCompressionQuality != null) {
        setValueByPath(parentObject, ['parameters', 'outputOptions', 'compressionQuality'], fromOutputCompressionQuality);
    }
    if (getValueByPath(fromObject, ['addWatermark']) !== undefined) {
        throw new Error('addWatermark parameter is not supported in Gemini API.');
    }
    if (getValueByPath(fromObject, ['enhancePrompt']) !== undefined) {
        throw new Error('enhancePrompt parameter is not supported in Gemini API.');
    }
    return toObject;
}
function generateImagesParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromPrompt = getValueByPath(fromObject, ['prompt']);
    if (fromPrompt != null) {
        setValueByPath(toObject, ['instances[0]', 'prompt'], fromPrompt);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], generateImagesConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function getModelParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'name'], tModel(apiClient, fromModel));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function listModelsConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, ['pageSize']);
    if (parentObject !== undefined && fromPageSize != null) {
        setValueByPath(parentObject, ['_query', 'pageSize'], fromPageSize);
    }
    const fromPageToken = getValueByPath(fromObject, ['pageToken']);
    if (parentObject !== undefined && fromPageToken != null) {
        setValueByPath(parentObject, ['_query', 'pageToken'], fromPageToken);
    }
    const fromFilter = getValueByPath(fromObject, ['filter']);
    if (parentObject !== undefined && fromFilter != null) {
        setValueByPath(parentObject, ['_query', 'filter'], fromFilter);
    }
    const fromQueryBase = getValueByPath(fromObject, ['queryBase']);
    if (parentObject !== undefined && fromQueryBase != null) {
        setValueByPath(parentObject, ['_url', 'models_url'], tModelsUrl(apiClient, fromQueryBase));
    }
    return toObject;
}
function listModelsParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], listModelsConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function updateModelConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, ['displayName']);
    if (parentObject !== undefined && fromDisplayName != null) {
        setValueByPath(parentObject, ['displayName'], fromDisplayName);
    }
    const fromDescription = getValueByPath(fromObject, ['description']);
    if (parentObject !== undefined && fromDescription != null) {
        setValueByPath(parentObject, ['description'], fromDescription);
    }
    return toObject;
}
function updateModelParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'name'], tModel(apiClient, fromModel));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], updateModelConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function deleteModelParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'name'], tModel(apiClient, fromModel));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function countTokensConfigToMldev(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['systemInstruction']) !== undefined) {
        throw new Error('systemInstruction parameter is not supported in Gemini API.');
    }
    if (getValueByPath(fromObject, ['tools']) !== undefined) {
        throw new Error('tools parameter is not supported in Gemini API.');
    }
    if (getValueByPath(fromObject, ['generationConfig']) !== undefined) {
        throw new Error('generationConfig parameter is not supported in Gemini API.');
    }
    return toObject;
}
function countTokensParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromContents = getValueByPath(fromObject, ['contents']);
    if (fromContents != null) {
        let transformedList = tContents(apiClient, fromContents);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return contentToMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['contents'], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], countTokensConfigToMldev(apiClient, fromConfig));
    }
    return toObject;
}
function imageToMldev(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['gcsUri']) !== undefined) {
        throw new Error('gcsUri parameter is not supported in Gemini API.');
    }
    const fromImageBytes = getValueByPath(fromObject, ['imageBytes']);
    if (fromImageBytes != null) {
        setValueByPath(toObject, ['bytesBase64Encoded'], tBytes(apiClient, fromImageBytes));
    }
    const fromMimeType = getValueByPath(fromObject, ['mimeType']);
    if (fromMimeType != null) {
        setValueByPath(toObject, ['mimeType'], fromMimeType);
    }
    return toObject;
}
function generateVideosConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromNumberOfVideos = getValueByPath(fromObject, [
        'numberOfVideos',
    ]);
    if (parentObject !== undefined && fromNumberOfVideos != null) {
        setValueByPath(parentObject, ['parameters', 'sampleCount'], fromNumberOfVideos);
    }
    if (getValueByPath(fromObject, ['outputGcsUri']) !== undefined) {
        throw new Error('outputGcsUri parameter is not supported in Gemini API.');
    }
    if (getValueByPath(fromObject, ['fps']) !== undefined) {
        throw new Error('fps parameter is not supported in Gemini API.');
    }
    const fromDurationSeconds = getValueByPath(fromObject, [
        'durationSeconds',
    ]);
    if (parentObject !== undefined && fromDurationSeconds != null) {
        setValueByPath(parentObject, ['parameters', 'durationSeconds'], fromDurationSeconds);
    }
    if (getValueByPath(fromObject, ['seed']) !== undefined) {
        throw new Error('seed parameter is not supported in Gemini API.');
    }
    const fromAspectRatio = getValueByPath(fromObject, ['aspectRatio']);
    if (parentObject !== undefined && fromAspectRatio != null) {
        setValueByPath(parentObject, ['parameters', 'aspectRatio'], fromAspectRatio);
    }
    if (getValueByPath(fromObject, ['resolution']) !== undefined) {
        throw new Error('resolution parameter is not supported in Gemini API.');
    }
    const fromPersonGeneration = getValueByPath(fromObject, [
        'personGeneration',
    ]);
    if (parentObject !== undefined && fromPersonGeneration != null) {
        setValueByPath(parentObject, ['parameters', 'personGeneration'], fromPersonGeneration);
    }
    if (getValueByPath(fromObject, ['pubsubTopic']) !== undefined) {
        throw new Error('pubsubTopic parameter is not supported in Gemini API.');
    }
    const fromNegativePrompt = getValueByPath(fromObject, [
        'negativePrompt',
    ]);
    if (parentObject !== undefined && fromNegativePrompt != null) {
        setValueByPath(parentObject, ['parameters', 'negativePrompt'], fromNegativePrompt);
    }
    if (getValueByPath(fromObject, ['enhancePrompt']) !== undefined) {
        throw new Error('enhancePrompt parameter is not supported in Gemini API.');
    }
    return toObject;
}
function generateVideosParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromPrompt = getValueByPath(fromObject, ['prompt']);
    if (fromPrompt != null) {
        setValueByPath(toObject, ['instances[0]', 'prompt'], fromPrompt);
    }
    const fromImage = getValueByPath(fromObject, ['image']);
    if (fromImage != null) {
        setValueByPath(toObject, ['instances[0]', 'image'], imageToMldev(apiClient, fromImage));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], generateVideosConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function partToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata',
    ]);
    if (fromVideoMetadata != null) {
        setValueByPath(toObject, ['videoMetadata'], fromVideoMetadata);
    }
    const fromThought = getValueByPath(fromObject, ['thought']);
    if (fromThought != null) {
        setValueByPath(toObject, ['thought'], fromThought);
    }
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult',
    ]);
    if (fromCodeExecutionResult != null) {
        setValueByPath(toObject, ['codeExecutionResult'], fromCodeExecutionResult);
    }
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode',
    ]);
    if (fromExecutableCode != null) {
        setValueByPath(toObject, ['executableCode'], fromExecutableCode);
    }
    const fromFileData = getValueByPath(fromObject, ['fileData']);
    if (fromFileData != null) {
        setValueByPath(toObject, ['fileData'], fromFileData);
    }
    const fromFunctionCall = getValueByPath(fromObject, ['functionCall']);
    if (fromFunctionCall != null) {
        setValueByPath(toObject, ['functionCall'], fromFunctionCall);
    }
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse',
    ]);
    if (fromFunctionResponse != null) {
        setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
    }
    const fromInlineData = getValueByPath(fromObject, ['inlineData']);
    if (fromInlineData != null) {
        setValueByPath(toObject, ['inlineData'], fromInlineData);
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    return toObject;
}
function contentToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, ['parts']);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return partToVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['parts'], transformedList);
    }
    const fromRole = getValueByPath(fromObject, ['role']);
    if (fromRole != null) {
        setValueByPath(toObject, ['role'], fromRole);
    }
    return toObject;
}
function modelSelectionConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromFeatureSelectionPreference = getValueByPath(fromObject, [
        'featureSelectionPreference',
    ]);
    if (fromFeatureSelectionPreference != null) {
        setValueByPath(toObject, ['featureSelectionPreference'], fromFeatureSelectionPreference);
    }
    return toObject;
}
function safetySettingToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromMethod = getValueByPath(fromObject, ['method']);
    if (fromMethod != null) {
        setValueByPath(toObject, ['method'], fromMethod);
    }
    const fromCategory = getValueByPath(fromObject, ['category']);
    if (fromCategory != null) {
        setValueByPath(toObject, ['category'], fromCategory);
    }
    const fromThreshold = getValueByPath(fromObject, ['threshold']);
    if (fromThreshold != null) {
        setValueByPath(toObject, ['threshold'], fromThreshold);
    }
    return toObject;
}
function googleSearchToVertex() {
    const toObject = {};
    return toObject;
}
function dynamicRetrievalConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, ['mode']);
    if (fromMode != null) {
        setValueByPath(toObject, ['mode'], fromMode);
    }
    const fromDynamicThreshold = getValueByPath(fromObject, [
        'dynamicThreshold',
    ]);
    if (fromDynamicThreshold != null) {
        setValueByPath(toObject, ['dynamicThreshold'], fromDynamicThreshold);
    }
    return toObject;
}
function googleSearchRetrievalToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromDynamicRetrievalConfig = getValueByPath(fromObject, [
        'dynamicRetrievalConfig',
    ]);
    if (fromDynamicRetrievalConfig != null) {
        setValueByPath(toObject, ['dynamicRetrievalConfig'], dynamicRetrievalConfigToVertex(apiClient, fromDynamicRetrievalConfig));
    }
    return toObject;
}
function enterpriseWebSearchToVertex() {
    const toObject = {};
    return toObject;
}
function apiKeyConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromApiKeyString = getValueByPath(fromObject, ['apiKeyString']);
    if (fromApiKeyString != null) {
        setValueByPath(toObject, ['apiKeyString'], fromApiKeyString);
    }
    return toObject;
}
function authConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromApiKeyConfig = getValueByPath(fromObject, ['apiKeyConfig']);
    if (fromApiKeyConfig != null) {
        setValueByPath(toObject, ['apiKeyConfig'], apiKeyConfigToVertex(apiClient, fromApiKeyConfig));
    }
    const fromAuthType = getValueByPath(fromObject, ['authType']);
    if (fromAuthType != null) {
        setValueByPath(toObject, ['authType'], fromAuthType);
    }
    const fromGoogleServiceAccountConfig = getValueByPath(fromObject, [
        'googleServiceAccountConfig',
    ]);
    if (fromGoogleServiceAccountConfig != null) {
        setValueByPath(toObject, ['googleServiceAccountConfig'], fromGoogleServiceAccountConfig);
    }
    const fromHttpBasicAuthConfig = getValueByPath(fromObject, [
        'httpBasicAuthConfig',
    ]);
    if (fromHttpBasicAuthConfig != null) {
        setValueByPath(toObject, ['httpBasicAuthConfig'], fromHttpBasicAuthConfig);
    }
    const fromOauthConfig = getValueByPath(fromObject, ['oauthConfig']);
    if (fromOauthConfig != null) {
        setValueByPath(toObject, ['oauthConfig'], fromOauthConfig);
    }
    const fromOidcConfig = getValueByPath(fromObject, ['oidcConfig']);
    if (fromOidcConfig != null) {
        setValueByPath(toObject, ['oidcConfig'], fromOidcConfig);
    }
    return toObject;
}
function googleMapsToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromAuthConfig = getValueByPath(fromObject, ['authConfig']);
    if (fromAuthConfig != null) {
        setValueByPath(toObject, ['authConfig'], authConfigToVertex(apiClient, fromAuthConfig));
    }
    return toObject;
}
function toolToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromRetrieval = getValueByPath(fromObject, ['retrieval']);
    if (fromRetrieval != null) {
        setValueByPath(toObject, ['retrieval'], fromRetrieval);
    }
    const fromGoogleSearch = getValueByPath(fromObject, ['googleSearch']);
    if (fromGoogleSearch != null) {
        setValueByPath(toObject, ['googleSearch'], googleSearchToVertex());
    }
    const fromGoogleSearchRetrieval = getValueByPath(fromObject, [
        'googleSearchRetrieval',
    ]);
    if (fromGoogleSearchRetrieval != null) {
        setValueByPath(toObject, ['googleSearchRetrieval'], googleSearchRetrievalToVertex(apiClient, fromGoogleSearchRetrieval));
    }
    const fromEnterpriseWebSearch = getValueByPath(fromObject, [
        'enterpriseWebSearch',
    ]);
    if (fromEnterpriseWebSearch != null) {
        setValueByPath(toObject, ['enterpriseWebSearch'], enterpriseWebSearchToVertex());
    }
    const fromGoogleMaps = getValueByPath(fromObject, ['googleMaps']);
    if (fromGoogleMaps != null) {
        setValueByPath(toObject, ['googleMaps'], googleMapsToVertex(apiClient, fromGoogleMaps));
    }
    const fromCodeExecution = getValueByPath(fromObject, [
        'codeExecution',
    ]);
    if (fromCodeExecution != null) {
        setValueByPath(toObject, ['codeExecution'], fromCodeExecution);
    }
    const fromFunctionDeclarations = getValueByPath(fromObject, [
        'functionDeclarations',
    ]);
    if (fromFunctionDeclarations != null) {
        setValueByPath(toObject, ['functionDeclarations'], fromFunctionDeclarations);
    }
    return toObject;
}
function functionCallingConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromMode = getValueByPath(fromObject, ['mode']);
    if (fromMode != null) {
        setValueByPath(toObject, ['mode'], fromMode);
    }
    const fromAllowedFunctionNames = getValueByPath(fromObject, [
        'allowedFunctionNames',
    ]);
    if (fromAllowedFunctionNames != null) {
        setValueByPath(toObject, ['allowedFunctionNames'], fromAllowedFunctionNames);
    }
    return toObject;
}
function latLngToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromLatitude = getValueByPath(fromObject, ['latitude']);
    if (fromLatitude != null) {
        setValueByPath(toObject, ['latitude'], fromLatitude);
    }
    const fromLongitude = getValueByPath(fromObject, ['longitude']);
    if (fromLongitude != null) {
        setValueByPath(toObject, ['longitude'], fromLongitude);
    }
    return toObject;
}
function retrievalConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromLatLng = getValueByPath(fromObject, ['latLng']);
    if (fromLatLng != null) {
        setValueByPath(toObject, ['latLng'], latLngToVertex(apiClient, fromLatLng));
    }
    return toObject;
}
function toolConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromFunctionCallingConfig = getValueByPath(fromObject, [
        'functionCallingConfig',
    ]);
    if (fromFunctionCallingConfig != null) {
        setValueByPath(toObject, ['functionCallingConfig'], functionCallingConfigToVertex(apiClient, fromFunctionCallingConfig));
    }
    const fromRetrievalConfig = getValueByPath(fromObject, [
        'retrievalConfig',
    ]);
    if (fromRetrievalConfig != null) {
        setValueByPath(toObject, ['retrievalConfig'], retrievalConfigToVertex(apiClient, fromRetrievalConfig));
    }
    return toObject;
}
function prebuiltVoiceConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromVoiceName = getValueByPath(fromObject, ['voiceName']);
    if (fromVoiceName != null) {
        setValueByPath(toObject, ['voiceName'], fromVoiceName);
    }
    return toObject;
}
function voiceConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromPrebuiltVoiceConfig = getValueByPath(fromObject, [
        'prebuiltVoiceConfig',
    ]);
    if (fromPrebuiltVoiceConfig != null) {
        setValueByPath(toObject, ['prebuiltVoiceConfig'], prebuiltVoiceConfigToVertex(apiClient, fromPrebuiltVoiceConfig));
    }
    return toObject;
}
function speechConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromVoiceConfig = getValueByPath(fromObject, ['voiceConfig']);
    if (fromVoiceConfig != null) {
        setValueByPath(toObject, ['voiceConfig'], voiceConfigToVertex(apiClient, fromVoiceConfig));
    }
    const fromLanguageCode = getValueByPath(fromObject, ['languageCode']);
    if (fromLanguageCode != null) {
        setValueByPath(toObject, ['languageCode'], fromLanguageCode);
    }
    return toObject;
}
function thinkingConfigToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromIncludeThoughts = getValueByPath(fromObject, [
        'includeThoughts',
    ]);
    if (fromIncludeThoughts != null) {
        setValueByPath(toObject, ['includeThoughts'], fromIncludeThoughts);
    }
    const fromThinkingBudget = getValueByPath(fromObject, [
        'thinkingBudget',
    ]);
    if (fromThinkingBudget != null) {
        setValueByPath(toObject, ['thinkingBudget'], fromThinkingBudget);
    }
    return toObject;
}
function generateContentConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction',
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) {
        setValueByPath(parentObject, ['systemInstruction'], contentToVertex(apiClient, tContent(apiClient, fromSystemInstruction)));
    }
    const fromTemperature = getValueByPath(fromObject, ['temperature']);
    if (fromTemperature != null) {
        setValueByPath(toObject, ['temperature'], fromTemperature);
    }
    const fromTopP = getValueByPath(fromObject, ['topP']);
    if (fromTopP != null) {
        setValueByPath(toObject, ['topP'], fromTopP);
    }
    const fromTopK = getValueByPath(fromObject, ['topK']);
    if (fromTopK != null) {
        setValueByPath(toObject, ['topK'], fromTopK);
    }
    const fromCandidateCount = getValueByPath(fromObject, [
        'candidateCount',
    ]);
    if (fromCandidateCount != null) {
        setValueByPath(toObject, ['candidateCount'], fromCandidateCount);
    }
    const fromMaxOutputTokens = getValueByPath(fromObject, [
        'maxOutputTokens',
    ]);
    if (fromMaxOutputTokens != null) {
        setValueByPath(toObject, ['maxOutputTokens'], fromMaxOutputTokens);
    }
    const fromStopSequences = getValueByPath(fromObject, [
        'stopSequences',
    ]);
    if (fromStopSequences != null) {
        setValueByPath(toObject, ['stopSequences'], fromStopSequences);
    }
    const fromResponseLogprobs = getValueByPath(fromObject, [
        'responseLogprobs',
    ]);
    if (fromResponseLogprobs != null) {
        setValueByPath(toObject, ['responseLogprobs'], fromResponseLogprobs);
    }
    const fromLogprobs = getValueByPath(fromObject, ['logprobs']);
    if (fromLogprobs != null) {
        setValueByPath(toObject, ['logprobs'], fromLogprobs);
    }
    const fromPresencePenalty = getValueByPath(fromObject, [
        'presencePenalty',
    ]);
    if (fromPresencePenalty != null) {
        setValueByPath(toObject, ['presencePenalty'], fromPresencePenalty);
    }
    const fromFrequencyPenalty = getValueByPath(fromObject, [
        'frequencyPenalty',
    ]);
    if (fromFrequencyPenalty != null) {
        setValueByPath(toObject, ['frequencyPenalty'], fromFrequencyPenalty);
    }
    const fromSeed = getValueByPath(fromObject, ['seed']);
    if (fromSeed != null) {
        setValueByPath(toObject, ['seed'], fromSeed);
    }
    const fromResponseMimeType = getValueByPath(fromObject, [
        'responseMimeType',
    ]);
    if (fromResponseMimeType != null) {
        setValueByPath(toObject, ['responseMimeType'], fromResponseMimeType);
    }
    const fromResponseSchema = getValueByPath(fromObject, [
        'responseSchema',
    ]);
    if (fromResponseSchema != null) {
        setValueByPath(toObject, ['responseSchema'], tSchema(apiClient, fromResponseSchema));
    }
    const fromRoutingConfig = getValueByPath(fromObject, [
        'routingConfig',
    ]);
    if (fromRoutingConfig != null) {
        setValueByPath(toObject, ['routingConfig'], fromRoutingConfig);
    }
    const fromModelSelectionConfig = getValueByPath(fromObject, [
        'modelSelectionConfig',
    ]);
    if (fromModelSelectionConfig != null) {
        setValueByPath(toObject, ['modelConfig'], modelSelectionConfigToVertex(apiClient, fromModelSelectionConfig));
    }
    const fromSafetySettings = getValueByPath(fromObject, [
        'safetySettings',
    ]);
    if (parentObject !== undefined && fromSafetySettings != null) {
        let transformedList = fromSafetySettings;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return safetySettingToVertex(apiClient, item);
            });
        }
        setValueByPath(parentObject, ['safetySettings'], transformedList);
    }
    const fromTools = getValueByPath(fromObject, ['tools']);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = tTools(apiClient, fromTools);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return toolToVertex(apiClient, tTool(apiClient, item));
            });
        }
        setValueByPath(parentObject, ['tools'], transformedList);
    }
    const fromToolConfig = getValueByPath(fromObject, ['toolConfig']);
    if (parentObject !== undefined && fromToolConfig != null) {
        setValueByPath(parentObject, ['toolConfig'], toolConfigToVertex(apiClient, fromToolConfig));
    }
    const fromLabels = getValueByPath(fromObject, ['labels']);
    if (parentObject !== undefined && fromLabels != null) {
        setValueByPath(parentObject, ['labels'], fromLabels);
    }
    const fromCachedContent = getValueByPath(fromObject, [
        'cachedContent',
    ]);
    if (parentObject !== undefined && fromCachedContent != null) {
        setValueByPath(parentObject, ['cachedContent'], tCachedContentName(apiClient, fromCachedContent));
    }
    const fromResponseModalities = getValueByPath(fromObject, [
        'responseModalities',
    ]);
    if (fromResponseModalities != null) {
        setValueByPath(toObject, ['responseModalities'], fromResponseModalities);
    }
    const fromMediaResolution = getValueByPath(fromObject, [
        'mediaResolution',
    ]);
    if (fromMediaResolution != null) {
        setValueByPath(toObject, ['mediaResolution'], fromMediaResolution);
    }
    const fromSpeechConfig = getValueByPath(fromObject, ['speechConfig']);
    if (fromSpeechConfig != null) {
        setValueByPath(toObject, ['speechConfig'], speechConfigToVertex(apiClient, tSpeechConfig(apiClient, fromSpeechConfig)));
    }
    const fromAudioTimestamp = getValueByPath(fromObject, [
        'audioTimestamp',
    ]);
    if (fromAudioTimestamp != null) {
        setValueByPath(toObject, ['audioTimestamp'], fromAudioTimestamp);
    }
    const fromThinkingConfig = getValueByPath(fromObject, [
        'thinkingConfig',
    ]);
    if (fromThinkingConfig != null) {
        setValueByPath(toObject, ['thinkingConfig'], thinkingConfigToVertex(apiClient, fromThinkingConfig));
    }
    return toObject;
}
function generateContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromContents = getValueByPath(fromObject, ['contents']);
    if (fromContents != null) {
        let transformedList = tContents(apiClient, fromContents);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return contentToVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['contents'], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['generationConfig'], generateContentConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function embedContentConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromTaskType = getValueByPath(fromObject, ['taskType']);
    if (parentObject !== undefined && fromTaskType != null) {
        setValueByPath(parentObject, ['instances[]', 'task_type'], fromTaskType);
    }
    const fromTitle = getValueByPath(fromObject, ['title']);
    if (parentObject !== undefined && fromTitle != null) {
        setValueByPath(parentObject, ['instances[]', 'title'], fromTitle);
    }
    const fromOutputDimensionality = getValueByPath(fromObject, [
        'outputDimensionality',
    ]);
    if (parentObject !== undefined && fromOutputDimensionality != null) {
        setValueByPath(parentObject, ['parameters', 'outputDimensionality'], fromOutputDimensionality);
    }
    const fromMimeType = getValueByPath(fromObject, ['mimeType']);
    if (parentObject !== undefined && fromMimeType != null) {
        setValueByPath(parentObject, ['instances[]', 'mimeType'], fromMimeType);
    }
    const fromAutoTruncate = getValueByPath(fromObject, ['autoTruncate']);
    if (parentObject !== undefined && fromAutoTruncate != null) {
        setValueByPath(parentObject, ['parameters', 'autoTruncate'], fromAutoTruncate);
    }
    return toObject;
}
function embedContentParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromContents = getValueByPath(fromObject, ['contents']);
    if (fromContents != null) {
        setValueByPath(toObject, ['instances[]', 'content'], tContentsForEmbed(apiClient, fromContents));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], embedContentConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function generateImagesConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromOutputGcsUri = getValueByPath(fromObject, ['outputGcsUri']);
    if (parentObject !== undefined && fromOutputGcsUri != null) {
        setValueByPath(parentObject, ['parameters', 'storageUri'], fromOutputGcsUri);
    }
    const fromNegativePrompt = getValueByPath(fromObject, [
        'negativePrompt',
    ]);
    if (parentObject !== undefined && fromNegativePrompt != null) {
        setValueByPath(parentObject, ['parameters', 'negativePrompt'], fromNegativePrompt);
    }
    const fromNumberOfImages = getValueByPath(fromObject, [
        'numberOfImages',
    ]);
    if (parentObject !== undefined && fromNumberOfImages != null) {
        setValueByPath(parentObject, ['parameters', 'sampleCount'], fromNumberOfImages);
    }
    const fromAspectRatio = getValueByPath(fromObject, ['aspectRatio']);
    if (parentObject !== undefined && fromAspectRatio != null) {
        setValueByPath(parentObject, ['parameters', 'aspectRatio'], fromAspectRatio);
    }
    const fromGuidanceScale = getValueByPath(fromObject, [
        'guidanceScale',
    ]);
    if (parentObject !== undefined && fromGuidanceScale != null) {
        setValueByPath(parentObject, ['parameters', 'guidanceScale'], fromGuidanceScale);
    }
    const fromSeed = getValueByPath(fromObject, ['seed']);
    if (parentObject !== undefined && fromSeed != null) {
        setValueByPath(parentObject, ['parameters', 'seed'], fromSeed);
    }
    const fromSafetyFilterLevel = getValueByPath(fromObject, [
        'safetyFilterLevel',
    ]);
    if (parentObject !== undefined && fromSafetyFilterLevel != null) {
        setValueByPath(parentObject, ['parameters', 'safetySetting'], fromSafetyFilterLevel);
    }
    const fromPersonGeneration = getValueByPath(fromObject, [
        'personGeneration',
    ]);
    if (parentObject !== undefined && fromPersonGeneration != null) {
        setValueByPath(parentObject, ['parameters', 'personGeneration'], fromPersonGeneration);
    }
    const fromIncludeSafetyAttributes = getValueByPath(fromObject, [
        'includeSafetyAttributes',
    ]);
    if (parentObject !== undefined && fromIncludeSafetyAttributes != null) {
        setValueByPath(parentObject, ['parameters', 'includeSafetyAttributes'], fromIncludeSafetyAttributes);
    }
    const fromIncludeRaiReason = getValueByPath(fromObject, [
        'includeRaiReason',
    ]);
    if (parentObject !== undefined && fromIncludeRaiReason != null) {
        setValueByPath(parentObject, ['parameters', 'includeRaiReason'], fromIncludeRaiReason);
    }
    const fromLanguage = getValueByPath(fromObject, ['language']);
    if (parentObject !== undefined && fromLanguage != null) {
        setValueByPath(parentObject, ['parameters', 'language'], fromLanguage);
    }
    const fromOutputMimeType = getValueByPath(fromObject, [
        'outputMimeType',
    ]);
    if (parentObject !== undefined && fromOutputMimeType != null) {
        setValueByPath(parentObject, ['parameters', 'outputOptions', 'mimeType'], fromOutputMimeType);
    }
    const fromOutputCompressionQuality = getValueByPath(fromObject, [
        'outputCompressionQuality',
    ]);
    if (parentObject !== undefined && fromOutputCompressionQuality != null) {
        setValueByPath(parentObject, ['parameters', 'outputOptions', 'compressionQuality'], fromOutputCompressionQuality);
    }
    const fromAddWatermark = getValueByPath(fromObject, ['addWatermark']);
    if (parentObject !== undefined && fromAddWatermark != null) {
        setValueByPath(parentObject, ['parameters', 'addWatermark'], fromAddWatermark);
    }
    const fromEnhancePrompt = getValueByPath(fromObject, [
        'enhancePrompt',
    ]);
    if (parentObject !== undefined && fromEnhancePrompt != null) {
        setValueByPath(parentObject, ['parameters', 'enhancePrompt'], fromEnhancePrompt);
    }
    return toObject;
}
function generateImagesParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromPrompt = getValueByPath(fromObject, ['prompt']);
    if (fromPrompt != null) {
        setValueByPath(toObject, ['instances[0]', 'prompt'], fromPrompt);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], generateImagesConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function getModelParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'name'], tModel(apiClient, fromModel));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function listModelsConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, ['pageSize']);
    if (parentObject !== undefined && fromPageSize != null) {
        setValueByPath(parentObject, ['_query', 'pageSize'], fromPageSize);
    }
    const fromPageToken = getValueByPath(fromObject, ['pageToken']);
    if (parentObject !== undefined && fromPageToken != null) {
        setValueByPath(parentObject, ['_query', 'pageToken'], fromPageToken);
    }
    const fromFilter = getValueByPath(fromObject, ['filter']);
    if (parentObject !== undefined && fromFilter != null) {
        setValueByPath(parentObject, ['_query', 'filter'], fromFilter);
    }
    const fromQueryBase = getValueByPath(fromObject, ['queryBase']);
    if (parentObject !== undefined && fromQueryBase != null) {
        setValueByPath(parentObject, ['_url', 'models_url'], tModelsUrl(apiClient, fromQueryBase));
    }
    return toObject;
}
function listModelsParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], listModelsConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function updateModelConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromDisplayName = getValueByPath(fromObject, ['displayName']);
    if (parentObject !== undefined && fromDisplayName != null) {
        setValueByPath(parentObject, ['displayName'], fromDisplayName);
    }
    const fromDescription = getValueByPath(fromObject, ['description']);
    if (parentObject !== undefined && fromDescription != null) {
        setValueByPath(parentObject, ['description'], fromDescription);
    }
    return toObject;
}
function updateModelParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], updateModelConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function deleteModelParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'name'], tModel(apiClient, fromModel));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function countTokensConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromSystemInstruction = getValueByPath(fromObject, [
        'systemInstruction',
    ]);
    if (parentObject !== undefined && fromSystemInstruction != null) {
        setValueByPath(parentObject, ['systemInstruction'], contentToVertex(apiClient, tContent(apiClient, fromSystemInstruction)));
    }
    const fromTools = getValueByPath(fromObject, ['tools']);
    if (parentObject !== undefined && fromTools != null) {
        let transformedList = fromTools;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return toolToVertex(apiClient, item);
            });
        }
        setValueByPath(parentObject, ['tools'], transformedList);
    }
    const fromGenerationConfig = getValueByPath(fromObject, [
        'generationConfig',
    ]);
    if (parentObject !== undefined && fromGenerationConfig != null) {
        setValueByPath(parentObject, ['generationConfig'], fromGenerationConfig);
    }
    return toObject;
}
function countTokensParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromContents = getValueByPath(fromObject, ['contents']);
    if (fromContents != null) {
        let transformedList = tContents(apiClient, fromContents);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return contentToVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['contents'], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], countTokensConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function computeTokensParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromContents = getValueByPath(fromObject, ['contents']);
    if (fromContents != null) {
        let transformedList = tContents(apiClient, fromContents);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return contentToVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['contents'], transformedList);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function imageToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromGcsUri = getValueByPath(fromObject, ['gcsUri']);
    if (fromGcsUri != null) {
        setValueByPath(toObject, ['gcsUri'], fromGcsUri);
    }
    const fromImageBytes = getValueByPath(fromObject, ['imageBytes']);
    if (fromImageBytes != null) {
        setValueByPath(toObject, ['bytesBase64Encoded'], tBytes(apiClient, fromImageBytes));
    }
    const fromMimeType = getValueByPath(fromObject, ['mimeType']);
    if (fromMimeType != null) {
        setValueByPath(toObject, ['mimeType'], fromMimeType);
    }
    return toObject;
}
function generateVideosConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromNumberOfVideos = getValueByPath(fromObject, [
        'numberOfVideos',
    ]);
    if (parentObject !== undefined && fromNumberOfVideos != null) {
        setValueByPath(parentObject, ['parameters', 'sampleCount'], fromNumberOfVideos);
    }
    const fromOutputGcsUri = getValueByPath(fromObject, ['outputGcsUri']);
    if (parentObject !== undefined && fromOutputGcsUri != null) {
        setValueByPath(parentObject, ['parameters', 'storageUri'], fromOutputGcsUri);
    }
    const fromFps = getValueByPath(fromObject, ['fps']);
    if (parentObject !== undefined && fromFps != null) {
        setValueByPath(parentObject, ['parameters', 'fps'], fromFps);
    }
    const fromDurationSeconds = getValueByPath(fromObject, [
        'durationSeconds',
    ]);
    if (parentObject !== undefined && fromDurationSeconds != null) {
        setValueByPath(parentObject, ['parameters', 'durationSeconds'], fromDurationSeconds);
    }
    const fromSeed = getValueByPath(fromObject, ['seed']);
    if (parentObject !== undefined && fromSeed != null) {
        setValueByPath(parentObject, ['parameters', 'seed'], fromSeed);
    }
    const fromAspectRatio = getValueByPath(fromObject, ['aspectRatio']);
    if (parentObject !== undefined && fromAspectRatio != null) {
        setValueByPath(parentObject, ['parameters', 'aspectRatio'], fromAspectRatio);
    }
    const fromResolution = getValueByPath(fromObject, ['resolution']);
    if (parentObject !== undefined && fromResolution != null) {
        setValueByPath(parentObject, ['parameters', 'resolution'], fromResolution);
    }
    const fromPersonGeneration = getValueByPath(fromObject, [
        'personGeneration',
    ]);
    if (parentObject !== undefined && fromPersonGeneration != null) {
        setValueByPath(parentObject, ['parameters', 'personGeneration'], fromPersonGeneration);
    }
    const fromPubsubTopic = getValueByPath(fromObject, ['pubsubTopic']);
    if (parentObject !== undefined && fromPubsubTopic != null) {
        setValueByPath(parentObject, ['parameters', 'pubsubTopic'], fromPubsubTopic);
    }
    const fromNegativePrompt = getValueByPath(fromObject, [
        'negativePrompt',
    ]);
    if (parentObject !== undefined && fromNegativePrompt != null) {
        setValueByPath(parentObject, ['parameters', 'negativePrompt'], fromNegativePrompt);
    }
    const fromEnhancePrompt = getValueByPath(fromObject, [
        'enhancePrompt',
    ]);
    if (parentObject !== undefined && fromEnhancePrompt != null) {
        setValueByPath(parentObject, ['parameters', 'enhancePrompt'], fromEnhancePrompt);
    }
    return toObject;
}
function generateVideosParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['_url', 'model'], tModel(apiClient, fromModel));
    }
    const fromPrompt = getValueByPath(fromObject, ['prompt']);
    if (fromPrompt != null) {
        setValueByPath(toObject, ['instances[0]', 'prompt'], fromPrompt);
    }
    const fromImage = getValueByPath(fromObject, ['image']);
    if (fromImage != null) {
        setValueByPath(toObject, ['instances[0]', 'image'], imageToVertex(apiClient, fromImage));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], generateVideosConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function partFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromThought = getValueByPath(fromObject, ['thought']);
    if (fromThought != null) {
        setValueByPath(toObject, ['thought'], fromThought);
    }
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult',
    ]);
    if (fromCodeExecutionResult != null) {
        setValueByPath(toObject, ['codeExecutionResult'], fromCodeExecutionResult);
    }
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode',
    ]);
    if (fromExecutableCode != null) {
        setValueByPath(toObject, ['executableCode'], fromExecutableCode);
    }
    const fromFileData = getValueByPath(fromObject, ['fileData']);
    if (fromFileData != null) {
        setValueByPath(toObject, ['fileData'], fromFileData);
    }
    const fromFunctionCall = getValueByPath(fromObject, ['functionCall']);
    if (fromFunctionCall != null) {
        setValueByPath(toObject, ['functionCall'], fromFunctionCall);
    }
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse',
    ]);
    if (fromFunctionResponse != null) {
        setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
    }
    const fromInlineData = getValueByPath(fromObject, ['inlineData']);
    if (fromInlineData != null) {
        setValueByPath(toObject, ['inlineData'], fromInlineData);
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    return toObject;
}
function contentFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, ['parts']);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return partFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['parts'], transformedList);
    }
    const fromRole = getValueByPath(fromObject, ['role']);
    if (fromRole != null) {
        setValueByPath(toObject, ['role'], fromRole);
    }
    return toObject;
}
function citationMetadataFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromCitations = getValueByPath(fromObject, ['citationSources']);
    if (fromCitations != null) {
        setValueByPath(toObject, ['citations'], fromCitations);
    }
    return toObject;
}
function candidateFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromContent = getValueByPath(fromObject, ['content']);
    if (fromContent != null) {
        setValueByPath(toObject, ['content'], contentFromMldev(apiClient, fromContent));
    }
    const fromCitationMetadata = getValueByPath(fromObject, [
        'citationMetadata',
    ]);
    if (fromCitationMetadata != null) {
        setValueByPath(toObject, ['citationMetadata'], citationMetadataFromMldev(apiClient, fromCitationMetadata));
    }
    const fromTokenCount = getValueByPath(fromObject, ['tokenCount']);
    if (fromTokenCount != null) {
        setValueByPath(toObject, ['tokenCount'], fromTokenCount);
    }
    const fromFinishReason = getValueByPath(fromObject, ['finishReason']);
    if (fromFinishReason != null) {
        setValueByPath(toObject, ['finishReason'], fromFinishReason);
    }
    const fromAvgLogprobs = getValueByPath(fromObject, ['avgLogprobs']);
    if (fromAvgLogprobs != null) {
        setValueByPath(toObject, ['avgLogprobs'], fromAvgLogprobs);
    }
    const fromGroundingMetadata = getValueByPath(fromObject, [
        'groundingMetadata',
    ]);
    if (fromGroundingMetadata != null) {
        setValueByPath(toObject, ['groundingMetadata'], fromGroundingMetadata);
    }
    const fromIndex = getValueByPath(fromObject, ['index']);
    if (fromIndex != null) {
        setValueByPath(toObject, ['index'], fromIndex);
    }
    const fromLogprobsResult = getValueByPath(fromObject, [
        'logprobsResult',
    ]);
    if (fromLogprobsResult != null) {
        setValueByPath(toObject, ['logprobsResult'], fromLogprobsResult);
    }
    const fromSafetyRatings = getValueByPath(fromObject, [
        'safetyRatings',
    ]);
    if (fromSafetyRatings != null) {
        setValueByPath(toObject, ['safetyRatings'], fromSafetyRatings);
    }
    return toObject;
}
function generateContentResponseFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromCandidates = getValueByPath(fromObject, ['candidates']);
    if (fromCandidates != null) {
        let transformedList = fromCandidates;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return candidateFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['candidates'], transformedList);
    }
    const fromModelVersion = getValueByPath(fromObject, ['modelVersion']);
    if (fromModelVersion != null) {
        setValueByPath(toObject, ['modelVersion'], fromModelVersion);
    }
    const fromPromptFeedback = getValueByPath(fromObject, [
        'promptFeedback',
    ]);
    if (fromPromptFeedback != null) {
        setValueByPath(toObject, ['promptFeedback'], fromPromptFeedback);
    }
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata',
    ]);
    if (fromUsageMetadata != null) {
        setValueByPath(toObject, ['usageMetadata'], fromUsageMetadata);
    }
    return toObject;
}
function contentEmbeddingFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromValues = getValueByPath(fromObject, ['values']);
    if (fromValues != null) {
        setValueByPath(toObject, ['values'], fromValues);
    }
    return toObject;
}
function embedContentMetadataFromMldev() {
    const toObject = {};
    return toObject;
}
function embedContentResponseFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromEmbeddings = getValueByPath(fromObject, ['embeddings']);
    if (fromEmbeddings != null) {
        let transformedList = fromEmbeddings;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return contentEmbeddingFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['embeddings'], transformedList);
    }
    const fromMetadata = getValueByPath(fromObject, ['metadata']);
    if (fromMetadata != null) {
        setValueByPath(toObject, ['metadata'], embedContentMetadataFromMldev());
    }
    return toObject;
}
function imageFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromImageBytes = getValueByPath(fromObject, [
        'bytesBase64Encoded',
    ]);
    if (fromImageBytes != null) {
        setValueByPath(toObject, ['imageBytes'], tBytes(apiClient, fromImageBytes));
    }
    const fromMimeType = getValueByPath(fromObject, ['mimeType']);
    if (fromMimeType != null) {
        setValueByPath(toObject, ['mimeType'], fromMimeType);
    }
    return toObject;
}
function safetyAttributesFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromCategories = getValueByPath(fromObject, [
        'safetyAttributes',
        'categories',
    ]);
    if (fromCategories != null) {
        setValueByPath(toObject, ['categories'], fromCategories);
    }
    const fromScores = getValueByPath(fromObject, [
        'safetyAttributes',
        'scores',
    ]);
    if (fromScores != null) {
        setValueByPath(toObject, ['scores'], fromScores);
    }
    const fromContentType = getValueByPath(fromObject, ['contentType']);
    if (fromContentType != null) {
        setValueByPath(toObject, ['contentType'], fromContentType);
    }
    return toObject;
}
function generatedImageFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromImage = getValueByPath(fromObject, ['_self']);
    if (fromImage != null) {
        setValueByPath(toObject, ['image'], imageFromMldev(apiClient, fromImage));
    }
    const fromRaiFilteredReason = getValueByPath(fromObject, [
        'raiFilteredReason',
    ]);
    if (fromRaiFilteredReason != null) {
        setValueByPath(toObject, ['raiFilteredReason'], fromRaiFilteredReason);
    }
    const fromSafetyAttributes = getValueByPath(fromObject, ['_self']);
    if (fromSafetyAttributes != null) {
        setValueByPath(toObject, ['safetyAttributes'], safetyAttributesFromMldev(apiClient, fromSafetyAttributes));
    }
    return toObject;
}
function generateImagesResponseFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromGeneratedImages = getValueByPath(fromObject, [
        'predictions',
    ]);
    if (fromGeneratedImages != null) {
        let transformedList = fromGeneratedImages;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return generatedImageFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['generatedImages'], transformedList);
    }
    const fromPositivePromptSafetyAttributes = getValueByPath(fromObject, [
        'positivePromptSafetyAttributes',
    ]);
    if (fromPositivePromptSafetyAttributes != null) {
        setValueByPath(toObject, ['positivePromptSafetyAttributes'], safetyAttributesFromMldev(apiClient, fromPositivePromptSafetyAttributes));
    }
    return toObject;
}
function tunedModelInfoFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromBaseModel = getValueByPath(fromObject, ['baseModel']);
    if (fromBaseModel != null) {
        setValueByPath(toObject, ['baseModel'], fromBaseModel);
    }
    const fromCreateTime = getValueByPath(fromObject, ['createTime']);
    if (fromCreateTime != null) {
        setValueByPath(toObject, ['createTime'], fromCreateTime);
    }
    const fromUpdateTime = getValueByPath(fromObject, ['updateTime']);
    if (fromUpdateTime != null) {
        setValueByPath(toObject, ['updateTime'], fromUpdateTime);
    }
    return toObject;
}
function modelFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromDisplayName = getValueByPath(fromObject, ['displayName']);
    if (fromDisplayName != null) {
        setValueByPath(toObject, ['displayName'], fromDisplayName);
    }
    const fromDescription = getValueByPath(fromObject, ['description']);
    if (fromDescription != null) {
        setValueByPath(toObject, ['description'], fromDescription);
    }
    const fromVersion = getValueByPath(fromObject, ['version']);
    if (fromVersion != null) {
        setValueByPath(toObject, ['version'], fromVersion);
    }
    const fromTunedModelInfo = getValueByPath(fromObject, ['_self']);
    if (fromTunedModelInfo != null) {
        setValueByPath(toObject, ['tunedModelInfo'], tunedModelInfoFromMldev(apiClient, fromTunedModelInfo));
    }
    const fromInputTokenLimit = getValueByPath(fromObject, [
        'inputTokenLimit',
    ]);
    if (fromInputTokenLimit != null) {
        setValueByPath(toObject, ['inputTokenLimit'], fromInputTokenLimit);
    }
    const fromOutputTokenLimit = getValueByPath(fromObject, [
        'outputTokenLimit',
    ]);
    if (fromOutputTokenLimit != null) {
        setValueByPath(toObject, ['outputTokenLimit'], fromOutputTokenLimit);
    }
    const fromSupportedActions = getValueByPath(fromObject, [
        'supportedGenerationMethods',
    ]);
    if (fromSupportedActions != null) {
        setValueByPath(toObject, ['supportedActions'], fromSupportedActions);
    }
    return toObject;
}
function listModelsResponseFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken',
    ]);
    if (fromNextPageToken != null) {
        setValueByPath(toObject, ['nextPageToken'], fromNextPageToken);
    }
    const fromModels = getValueByPath(fromObject, ['_self']);
    if (fromModels != null) {
        let transformedList = tExtractModels(apiClient, fromModels);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return modelFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['models'], transformedList);
    }
    return toObject;
}
function deleteModelResponseFromMldev() {
    const toObject = {};
    return toObject;
}
function countTokensResponseFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromTotalTokens = getValueByPath(fromObject, ['totalTokens']);
    if (fromTotalTokens != null) {
        setValueByPath(toObject, ['totalTokens'], fromTotalTokens);
    }
    const fromCachedContentTokenCount = getValueByPath(fromObject, [
        'cachedContentTokenCount',
    ]);
    if (fromCachedContentTokenCount != null) {
        setValueByPath(toObject, ['cachedContentTokenCount'], fromCachedContentTokenCount);
    }
    return toObject;
}
function videoFromMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromUri = getValueByPath(fromObject, ['video', 'uri']);
    if (fromUri != null) {
        setValueByPath(toObject, ['uri'], fromUri);
    }
    const fromVideoBytes = getValueByPath(fromObject, [
        'video',
        'encodedVideo',
    ]);
    if (fromVideoBytes != null) {
        setValueByPath(toObject, ['videoBytes'], tBytes(apiClient, fromVideoBytes));
    }
    const fromMimeType = getValueByPath(fromObject, ['encoding']);
    if (fromMimeType != null) {
        setValueByPath(toObject, ['mimeType'], fromMimeType);
    }
    return toObject;
}
function generatedVideoFromMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromVideo = getValueByPath(fromObject, ['_self']);
    if (fromVideo != null) {
        setValueByPath(toObject, ['video'], videoFromMldev$1(apiClient, fromVideo));
    }
    return toObject;
}
function generateVideosResponseFromMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromGeneratedVideos = getValueByPath(fromObject, [
        'generatedSamples',
    ]);
    if (fromGeneratedVideos != null) {
        let transformedList = fromGeneratedVideos;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return generatedVideoFromMldev$1(apiClient, item);
            });
        }
        setValueByPath(toObject, ['generatedVideos'], transformedList);
    }
    const fromRaiMediaFilteredCount = getValueByPath(fromObject, [
        'raiMediaFilteredCount',
    ]);
    if (fromRaiMediaFilteredCount != null) {
        setValueByPath(toObject, ['raiMediaFilteredCount'], fromRaiMediaFilteredCount);
    }
    const fromRaiMediaFilteredReasons = getValueByPath(fromObject, [
        'raiMediaFilteredReasons',
    ]);
    if (fromRaiMediaFilteredReasons != null) {
        setValueByPath(toObject, ['raiMediaFilteredReasons'], fromRaiMediaFilteredReasons);
    }
    return toObject;
}
function generateVideosOperationFromMldev$1(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromMetadata = getValueByPath(fromObject, ['metadata']);
    if (fromMetadata != null) {
        setValueByPath(toObject, ['metadata'], fromMetadata);
    }
    const fromDone = getValueByPath(fromObject, ['done']);
    if (fromDone != null) {
        setValueByPath(toObject, ['done'], fromDone);
    }
    const fromError = getValueByPath(fromObject, ['error']);
    if (fromError != null) {
        setValueByPath(toObject, ['error'], fromError);
    }
    const fromResponse = getValueByPath(fromObject, [
        'response',
        'generateVideoResponse',
    ]);
    if (fromResponse != null) {
        setValueByPath(toObject, ['response'], generateVideosResponseFromMldev$1(apiClient, fromResponse));
    }
    return toObject;
}
function partFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromVideoMetadata = getValueByPath(fromObject, [
        'videoMetadata',
    ]);
    if (fromVideoMetadata != null) {
        setValueByPath(toObject, ['videoMetadata'], fromVideoMetadata);
    }
    const fromThought = getValueByPath(fromObject, ['thought']);
    if (fromThought != null) {
        setValueByPath(toObject, ['thought'], fromThought);
    }
    const fromCodeExecutionResult = getValueByPath(fromObject, [
        'codeExecutionResult',
    ]);
    if (fromCodeExecutionResult != null) {
        setValueByPath(toObject, ['codeExecutionResult'], fromCodeExecutionResult);
    }
    const fromExecutableCode = getValueByPath(fromObject, [
        'executableCode',
    ]);
    if (fromExecutableCode != null) {
        setValueByPath(toObject, ['executableCode'], fromExecutableCode);
    }
    const fromFileData = getValueByPath(fromObject, ['fileData']);
    if (fromFileData != null) {
        setValueByPath(toObject, ['fileData'], fromFileData);
    }
    const fromFunctionCall = getValueByPath(fromObject, ['functionCall']);
    if (fromFunctionCall != null) {
        setValueByPath(toObject, ['functionCall'], fromFunctionCall);
    }
    const fromFunctionResponse = getValueByPath(fromObject, [
        'functionResponse',
    ]);
    if (fromFunctionResponse != null) {
        setValueByPath(toObject, ['functionResponse'], fromFunctionResponse);
    }
    const fromInlineData = getValueByPath(fromObject, ['inlineData']);
    if (fromInlineData != null) {
        setValueByPath(toObject, ['inlineData'], fromInlineData);
    }
    const fromText = getValueByPath(fromObject, ['text']);
    if (fromText != null) {
        setValueByPath(toObject, ['text'], fromText);
    }
    return toObject;
}
function contentFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromParts = getValueByPath(fromObject, ['parts']);
    if (fromParts != null) {
        let transformedList = fromParts;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return partFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['parts'], transformedList);
    }
    const fromRole = getValueByPath(fromObject, ['role']);
    if (fromRole != null) {
        setValueByPath(toObject, ['role'], fromRole);
    }
    return toObject;
}
function citationMetadataFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromCitations = getValueByPath(fromObject, ['citations']);
    if (fromCitations != null) {
        setValueByPath(toObject, ['citations'], fromCitations);
    }
    return toObject;
}
function candidateFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromContent = getValueByPath(fromObject, ['content']);
    if (fromContent != null) {
        setValueByPath(toObject, ['content'], contentFromVertex(apiClient, fromContent));
    }
    const fromCitationMetadata = getValueByPath(fromObject, [
        'citationMetadata',
    ]);
    if (fromCitationMetadata != null) {
        setValueByPath(toObject, ['citationMetadata'], citationMetadataFromVertex(apiClient, fromCitationMetadata));
    }
    const fromFinishMessage = getValueByPath(fromObject, [
        'finishMessage',
    ]);
    if (fromFinishMessage != null) {
        setValueByPath(toObject, ['finishMessage'], fromFinishMessage);
    }
    const fromFinishReason = getValueByPath(fromObject, ['finishReason']);
    if (fromFinishReason != null) {
        setValueByPath(toObject, ['finishReason'], fromFinishReason);
    }
    const fromAvgLogprobs = getValueByPath(fromObject, ['avgLogprobs']);
    if (fromAvgLogprobs != null) {
        setValueByPath(toObject, ['avgLogprobs'], fromAvgLogprobs);
    }
    const fromGroundingMetadata = getValueByPath(fromObject, [
        'groundingMetadata',
    ]);
    if (fromGroundingMetadata != null) {
        setValueByPath(toObject, ['groundingMetadata'], fromGroundingMetadata);
    }
    const fromIndex = getValueByPath(fromObject, ['index']);
    if (fromIndex != null) {
        setValueByPath(toObject, ['index'], fromIndex);
    }
    const fromLogprobsResult = getValueByPath(fromObject, [
        'logprobsResult',
    ]);
    if (fromLogprobsResult != null) {
        setValueByPath(toObject, ['logprobsResult'], fromLogprobsResult);
    }
    const fromSafetyRatings = getValueByPath(fromObject, [
        'safetyRatings',
    ]);
    if (fromSafetyRatings != null) {
        setValueByPath(toObject, ['safetyRatings'], fromSafetyRatings);
    }
    return toObject;
}
function generateContentResponseFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromCandidates = getValueByPath(fromObject, ['candidates']);
    if (fromCandidates != null) {
        let transformedList = fromCandidates;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return candidateFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['candidates'], transformedList);
    }
    const fromCreateTime = getValueByPath(fromObject, ['createTime']);
    if (fromCreateTime != null) {
        setValueByPath(toObject, ['createTime'], fromCreateTime);
    }
    const fromResponseId = getValueByPath(fromObject, ['responseId']);
    if (fromResponseId != null) {
        setValueByPath(toObject, ['responseId'], fromResponseId);
    }
    const fromModelVersion = getValueByPath(fromObject, ['modelVersion']);
    if (fromModelVersion != null) {
        setValueByPath(toObject, ['modelVersion'], fromModelVersion);
    }
    const fromPromptFeedback = getValueByPath(fromObject, [
        'promptFeedback',
    ]);
    if (fromPromptFeedback != null) {
        setValueByPath(toObject, ['promptFeedback'], fromPromptFeedback);
    }
    const fromUsageMetadata = getValueByPath(fromObject, [
        'usageMetadata',
    ]);
    if (fromUsageMetadata != null) {
        setValueByPath(toObject, ['usageMetadata'], fromUsageMetadata);
    }
    return toObject;
}
function contentEmbeddingStatisticsFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromTruncated = getValueByPath(fromObject, ['truncated']);
    if (fromTruncated != null) {
        setValueByPath(toObject, ['truncated'], fromTruncated);
    }
    const fromTokenCount = getValueByPath(fromObject, ['token_count']);
    if (fromTokenCount != null) {
        setValueByPath(toObject, ['tokenCount'], fromTokenCount);
    }
    return toObject;
}
function contentEmbeddingFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromValues = getValueByPath(fromObject, ['values']);
    if (fromValues != null) {
        setValueByPath(toObject, ['values'], fromValues);
    }
    const fromStatistics = getValueByPath(fromObject, ['statistics']);
    if (fromStatistics != null) {
        setValueByPath(toObject, ['statistics'], contentEmbeddingStatisticsFromVertex(apiClient, fromStatistics));
    }
    return toObject;
}
function embedContentMetadataFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromBillableCharacterCount = getValueByPath(fromObject, [
        'billableCharacterCount',
    ]);
    if (fromBillableCharacterCount != null) {
        setValueByPath(toObject, ['billableCharacterCount'], fromBillableCharacterCount);
    }
    return toObject;
}
function embedContentResponseFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromEmbeddings = getValueByPath(fromObject, [
        'predictions[]',
        'embeddings',
    ]);
    if (fromEmbeddings != null) {
        let transformedList = fromEmbeddings;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return contentEmbeddingFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['embeddings'], transformedList);
    }
    const fromMetadata = getValueByPath(fromObject, ['metadata']);
    if (fromMetadata != null) {
        setValueByPath(toObject, ['metadata'], embedContentMetadataFromVertex(apiClient, fromMetadata));
    }
    return toObject;
}
function imageFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromGcsUri = getValueByPath(fromObject, ['gcsUri']);
    if (fromGcsUri != null) {
        setValueByPath(toObject, ['gcsUri'], fromGcsUri);
    }
    const fromImageBytes = getValueByPath(fromObject, [
        'bytesBase64Encoded',
    ]);
    if (fromImageBytes != null) {
        setValueByPath(toObject, ['imageBytes'], tBytes(apiClient, fromImageBytes));
    }
    const fromMimeType = getValueByPath(fromObject, ['mimeType']);
    if (fromMimeType != null) {
        setValueByPath(toObject, ['mimeType'], fromMimeType);
    }
    return toObject;
}
function safetyAttributesFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromCategories = getValueByPath(fromObject, [
        'safetyAttributes',
        'categories',
    ]);
    if (fromCategories != null) {
        setValueByPath(toObject, ['categories'], fromCategories);
    }
    const fromScores = getValueByPath(fromObject, [
        'safetyAttributes',
        'scores',
    ]);
    if (fromScores != null) {
        setValueByPath(toObject, ['scores'], fromScores);
    }
    const fromContentType = getValueByPath(fromObject, ['contentType']);
    if (fromContentType != null) {
        setValueByPath(toObject, ['contentType'], fromContentType);
    }
    return toObject;
}
function generatedImageFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromImage = getValueByPath(fromObject, ['_self']);
    if (fromImage != null) {
        setValueByPath(toObject, ['image'], imageFromVertex(apiClient, fromImage));
    }
    const fromRaiFilteredReason = getValueByPath(fromObject, [
        'raiFilteredReason',
    ]);
    if (fromRaiFilteredReason != null) {
        setValueByPath(toObject, ['raiFilteredReason'], fromRaiFilteredReason);
    }
    const fromSafetyAttributes = getValueByPath(fromObject, ['_self']);
    if (fromSafetyAttributes != null) {
        setValueByPath(toObject, ['safetyAttributes'], safetyAttributesFromVertex(apiClient, fromSafetyAttributes));
    }
    const fromEnhancedPrompt = getValueByPath(fromObject, ['prompt']);
    if (fromEnhancedPrompt != null) {
        setValueByPath(toObject, ['enhancedPrompt'], fromEnhancedPrompt);
    }
    return toObject;
}
function generateImagesResponseFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromGeneratedImages = getValueByPath(fromObject, [
        'predictions',
    ]);
    if (fromGeneratedImages != null) {
        let transformedList = fromGeneratedImages;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return generatedImageFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['generatedImages'], transformedList);
    }
    const fromPositivePromptSafetyAttributes = getValueByPath(fromObject, [
        'positivePromptSafetyAttributes',
    ]);
    if (fromPositivePromptSafetyAttributes != null) {
        setValueByPath(toObject, ['positivePromptSafetyAttributes'], safetyAttributesFromVertex(apiClient, fromPositivePromptSafetyAttributes));
    }
    return toObject;
}
function endpointFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['endpoint']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromDeployedModelId = getValueByPath(fromObject, [
        'deployedModelId',
    ]);
    if (fromDeployedModelId != null) {
        setValueByPath(toObject, ['deployedModelId'], fromDeployedModelId);
    }
    return toObject;
}
function tunedModelInfoFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromBaseModel = getValueByPath(fromObject, [
        'labels',
        'google-vertex-llm-tuning-base-model-id',
    ]);
    if (fromBaseModel != null) {
        setValueByPath(toObject, ['baseModel'], fromBaseModel);
    }
    const fromCreateTime = getValueByPath(fromObject, ['createTime']);
    if (fromCreateTime != null) {
        setValueByPath(toObject, ['createTime'], fromCreateTime);
    }
    const fromUpdateTime = getValueByPath(fromObject, ['updateTime']);
    if (fromUpdateTime != null) {
        setValueByPath(toObject, ['updateTime'], fromUpdateTime);
    }
    return toObject;
}
function modelFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromDisplayName = getValueByPath(fromObject, ['displayName']);
    if (fromDisplayName != null) {
        setValueByPath(toObject, ['displayName'], fromDisplayName);
    }
    const fromDescription = getValueByPath(fromObject, ['description']);
    if (fromDescription != null) {
        setValueByPath(toObject, ['description'], fromDescription);
    }
    const fromVersion = getValueByPath(fromObject, ['versionId']);
    if (fromVersion != null) {
        setValueByPath(toObject, ['version'], fromVersion);
    }
    const fromEndpoints = getValueByPath(fromObject, ['deployedModels']);
    if (fromEndpoints != null) {
        let transformedList = fromEndpoints;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return endpointFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['endpoints'], transformedList);
    }
    const fromLabels = getValueByPath(fromObject, ['labels']);
    if (fromLabels != null) {
        setValueByPath(toObject, ['labels'], fromLabels);
    }
    const fromTunedModelInfo = getValueByPath(fromObject, ['_self']);
    if (fromTunedModelInfo != null) {
        setValueByPath(toObject, ['tunedModelInfo'], tunedModelInfoFromVertex(apiClient, fromTunedModelInfo));
    }
    return toObject;
}
function listModelsResponseFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken',
    ]);
    if (fromNextPageToken != null) {
        setValueByPath(toObject, ['nextPageToken'], fromNextPageToken);
    }
    const fromModels = getValueByPath(fromObject, ['_self']);
    if (fromModels != null) {
        let transformedList = tExtractModels(apiClient, fromModels);
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return modelFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['models'], transformedList);
    }
    return toObject;
}
function deleteModelResponseFromVertex() {
    const toObject = {};
    return toObject;
}
function countTokensResponseFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromTotalTokens = getValueByPath(fromObject, ['totalTokens']);
    if (fromTotalTokens != null) {
        setValueByPath(toObject, ['totalTokens'], fromTotalTokens);
    }
    return toObject;
}
function computeTokensResponseFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromTokensInfo = getValueByPath(fromObject, ['tokensInfo']);
    if (fromTokensInfo != null) {
        setValueByPath(toObject, ['tokensInfo'], fromTokensInfo);
    }
    return toObject;
}
function videoFromVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromUri = getValueByPath(fromObject, ['gcsUri']);
    if (fromUri != null) {
        setValueByPath(toObject, ['uri'], fromUri);
    }
    const fromVideoBytes = getValueByPath(fromObject, [
        'bytesBase64Encoded',
    ]);
    if (fromVideoBytes != null) {
        setValueByPath(toObject, ['videoBytes'], tBytes(apiClient, fromVideoBytes));
    }
    const fromMimeType = getValueByPath(fromObject, ['mimeType']);
    if (fromMimeType != null) {
        setValueByPath(toObject, ['mimeType'], fromMimeType);
    }
    return toObject;
}
function generatedVideoFromVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromVideo = getValueByPath(fromObject, ['_self']);
    if (fromVideo != null) {
        setValueByPath(toObject, ['video'], videoFromVertex$1(apiClient, fromVideo));
    }
    return toObject;
}
function generateVideosResponseFromVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromGeneratedVideos = getValueByPath(fromObject, ['videos']);
    if (fromGeneratedVideos != null) {
        let transformedList = fromGeneratedVideos;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return generatedVideoFromVertex$1(apiClient, item);
            });
        }
        setValueByPath(toObject, ['generatedVideos'], transformedList);
    }
    const fromRaiMediaFilteredCount = getValueByPath(fromObject, [
        'raiMediaFilteredCount',
    ]);
    if (fromRaiMediaFilteredCount != null) {
        setValueByPath(toObject, ['raiMediaFilteredCount'], fromRaiMediaFilteredCount);
    }
    const fromRaiMediaFilteredReasons = getValueByPath(fromObject, [
        'raiMediaFilteredReasons',
    ]);
    if (fromRaiMediaFilteredReasons != null) {
        setValueByPath(toObject, ['raiMediaFilteredReasons'], fromRaiMediaFilteredReasons);
    }
    return toObject;
}
function generateVideosOperationFromVertex$1(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromMetadata = getValueByPath(fromObject, ['metadata']);
    if (fromMetadata != null) {
        setValueByPath(toObject, ['metadata'], fromMetadata);
    }
    const fromDone = getValueByPath(fromObject, ['done']);
    if (fromDone != null) {
        setValueByPath(toObject, ['done'], fromDone);
    }
    const fromError = getValueByPath(fromObject, ['error']);
    if (fromError != null) {
        setValueByPath(toObject, ['error'], fromError);
    }
    const fromResponse = getValueByPath(fromObject, ['response']);
    if (fromResponse != null) {
        setValueByPath(toObject, ['response'], generateVideosResponseFromVertex$1(apiClient, fromResponse));
    }
    return toObject;
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const FUNCTION_RESPONSE_REQUIRES_ID = 'FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.';
/**
 * Handles incoming messages from the WebSocket.
 *
 * @remarks
 * This function is responsible for parsing incoming messages, transforming them
 * into LiveServerMessages, and then calling the onmessage callback. Note that
 * the first message which is received from the server is a setupComplete
 * message.
 *
 * @param apiClient The ApiClient instance.
 * @param onmessage The user-provided onmessage callback (if any).
 * @param event The MessageEvent from the WebSocket.
 */
async function handleWebSocketMessage(apiClient, onmessage, event) {
    const serverMessage = new LiveServerMessage();
    let data;
    if (event.data instanceof Blob) {
        data = JSON.parse(await event.data.text());
    }
    else {
        data = JSON.parse(event.data);
    }
    if (apiClient.isVertexAI()) {
        const resp = liveServerMessageFromVertex(apiClient, data);
        Object.assign(serverMessage, resp);
    }
    else {
        const resp = liveServerMessageFromMldev(apiClient, data);
        Object.assign(serverMessage, resp);
    }
    onmessage(serverMessage);
}
/**
   Live class encapsulates the configuration for live interaction with the
   Generative Language API. It embeds ApiClient for general API settings.

   @experimental
  */
class Live {
    constructor(apiClient, auth, webSocketFactory) {
        this.apiClient = apiClient;
        this.auth = auth;
        this.webSocketFactory = webSocketFactory;
    }
    /**
       Establishes a connection to the specified model with the given
       configuration and returns a Session object representing that connection.
  
       @experimental
  
       @remarks
  
       @param params - The parameters for establishing a connection to the model.
       @return A live session.
  
       @example
       ```ts
       let model: string;
       if (GOOGLE_GENAI_USE_VERTEXAI) {
         model = 'gemini-2.0-flash-live-preview-04-09';
       } else {
         model = 'gemini-2.0-flash-live-001';
       }
       const session = await ai.live.connect({
         model: model,
         config: {
           responseModalities: [Modality.AUDIO],
         },
         callbacks: {
           onopen: () => {
             console.log('Connected to the socket.');
           },
           onmessage: (e: MessageEvent) => {
             console.log('Received message from the server: %s\n', debug(e.data));
           },
           onerror: (e: ErrorEvent) => {
             console.log('Error occurred: %s\n', debug(e.error));
           },
           onclose: (e: CloseEvent) => {
             console.log('Connection closed.');
           },
         },
       });
       ```
      */
    async connect(params) {
        var _a, _b, _c, _d;
        const websocketBaseUrl = this.apiClient.getWebsocketBaseUrl();
        const apiVersion = this.apiClient.getApiVersion();
        let url;
        const headers = mapToHeaders(this.apiClient.getDefaultHeaders());
        if (this.apiClient.isVertexAI()) {
            url = `${websocketBaseUrl}/ws/google.cloud.aiplatform.${apiVersion}.LlmBidiService/BidiGenerateContent`;
            await this.auth.addAuthHeaders(headers);
        }
        else {
            const apiKey = this.apiClient.getApiKey();
            url = `${websocketBaseUrl}/ws/google.ai.generativelanguage.${apiVersion}.GenerativeService.BidiGenerateContent?key=${apiKey}`;
        }
        let onopenResolve = () => { };
        const onopenPromise = new Promise((resolve) => {
            onopenResolve = resolve;
        });
        const callbacks = params.callbacks;
        const onopenAwaitedCallback = function () {
            var _a;
            (_a = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onopen) === null || _a === void 0 ? void 0 : _a.call(callbacks);
            onopenResolve({});
        };
        const apiClient = this.apiClient;
        const websocketCallbacks = {
            onopen: onopenAwaitedCallback,
            onmessage: (event) => {
                void handleWebSocketMessage(apiClient, callbacks.onmessage, event);
            },
            onerror: (_a = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onerror) !== null && _a !== void 0 ? _a : function (e) {
            },
            onclose: (_b = callbacks === null || callbacks === void 0 ? void 0 : callbacks.onclose) !== null && _b !== void 0 ? _b : function (e) {
            },
        };
        const conn = this.webSocketFactory.create(url, headersToMap(headers), websocketCallbacks);
        conn.connect();
        // Wait for the websocket to open before sending requests.
        await onopenPromise;
        let transformedModel = tModel(this.apiClient, params.model);
        if (this.apiClient.isVertexAI() &&
            transformedModel.startsWith('publishers/')) {
            const project = this.apiClient.getProject();
            const location = this.apiClient.getLocation();
            transformedModel =
                `projects/${project}/locations/${location}/` + transformedModel;
        }
        let clientMessage = {};
        if (this.apiClient.isVertexAI() &&
            ((_c = params.config) === null || _c === void 0 ? void 0 : _c.responseModalities) === undefined) {
            // Set default to AUDIO to align with MLDev API.
            if (params.config === undefined) {
                params.config = { responseModalities: [Modality.AUDIO] };
            }
            else {
                params.config.responseModalities = [Modality.AUDIO];
            }
        }
        if ((_d = params.config) === null || _d === void 0 ? void 0 : _d.generationConfig) {
            // Raise deprecation warning for generationConfig.
            console.warn('Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).');
        }
        const liveConnectParameters = {
            model: transformedModel,
            config: params.config,
            callbacks: params.callbacks,
        };
        if (this.apiClient.isVertexAI()) {
            clientMessage = liveConnectParametersToVertex(this.apiClient, liveConnectParameters);
        }
        else {
            clientMessage = liveConnectParametersToMldev(this.apiClient, liveConnectParameters);
        }
        delete clientMessage['config'];
        conn.send(JSON.stringify(clientMessage));
        return new Session(conn, this.apiClient);
    }
}
const defaultLiveSendClientContentParamerters = {
    turnComplete: true,
};
/**
   Represents a connection to the API.

   @experimental
  */
class Session {
    constructor(conn, apiClient) {
        this.conn = conn;
        this.apiClient = apiClient;
    }
    tLiveClientContent(apiClient, params) {
        if (params.turns !== null && params.turns !== undefined) {
            let contents = [];
            try {
                contents = tContents(apiClient, params.turns);
                if (apiClient.isVertexAI()) {
                    contents = contents.map((item) => contentToVertex(apiClient, item));
                }
                else {
                    contents = contents.map((item) => contentToMldev(apiClient, item));
                }
            }
            catch (_a) {
                throw new Error(`Failed to parse client content "turns", type: '${typeof params.turns}'`);
            }
            return {
                clientContent: { turns: contents, turnComplete: params.turnComplete },
            };
        }
        return {
            clientContent: { turnComplete: params.turnComplete },
        };
    }
    tLiveClienttToolResponse(apiClient, params) {
        let functionResponses = [];
        if (params.functionResponses == null) {
            throw new Error('functionResponses is required.');
        }
        if (!Array.isArray(params.functionResponses)) {
            functionResponses = [params.functionResponses];
        }
        else {
            functionResponses = params.functionResponses;
        }
        if (functionResponses.length === 0) {
            throw new Error('functionResponses is required.');
        }
        for (const functionResponse of functionResponses) {
            if (typeof functionResponse !== 'object' ||
                functionResponse === null ||
                !('name' in functionResponse) ||
                !('response' in functionResponse)) {
                throw new Error(`Could not parse function response, type '${typeof functionResponse}'.`);
            }
            if (!apiClient.isVertexAI() && !('id' in functionResponse)) {
                throw new Error(FUNCTION_RESPONSE_REQUIRES_ID);
            }
        }
        const clientMessage = {
            toolResponse: { functionResponses: functionResponses },
        };
        return clientMessage;
    }
    /**
      Send a message over the established connection.
  
      @param params - Contains two **optional** properties, `turns` and
          `turnComplete`.
  
        - `turns` will be converted to a `Content[]`
        - `turnComplete: true` [default] indicates that you are done sending
          content and expect a response. If `turnComplete: false`, the server
          will wait for additional messages before starting generation.
  
      @experimental
  
      @remarks
      There are two ways to send messages to the live API:
      `sendClientContent` and `sendRealtimeInput`.
  
      `sendClientContent` messages are added to the model context **in order**.
      Having a conversation using `sendClientContent` messages is roughly
      equivalent to using the `Chat.sendMessageStream`, except that the state of
      the `chat` history is stored on the API server instead of locally.
  
      Because of `sendClientContent`'s order guarantee, the model cannot respons
      as quickly to `sendClientContent` messages as to `sendRealtimeInput`
      messages. This makes the biggest difference when sending objects that have
      significant preprocessing time (typically images).
  
      The `sendClientContent` message sends a `Content[]`
      which has more options than the `Blob` sent by `sendRealtimeInput`.
  
      So the main use-cases for `sendClientContent` over `sendRealtimeInput` are:
  
      - Sending anything that can't be represented as a `Blob` (text,
      `sendClientContent({turns="Hello?"}`)).
      - Managing turns when not using audio input and voice activity detection.
        (`sendClientContent({turnComplete:true})` or the short form
      `sendClientContent()`)
      - Prefilling a conversation context
        ```
        sendClientContent({
            turns: [
              Content({role:user, parts:...}),
              Content({role:user, parts:...}),
              ...
            ]
        })
        ```
      @experimental
     */
    sendClientContent(params) {
        params = Object.assign(Object.assign({}, defaultLiveSendClientContentParamerters), params);
        const clientMessage = this.tLiveClientContent(this.apiClient, params);
        this.conn.send(JSON.stringify(clientMessage));
    }
    /**
      Send a realtime message over the established connection.
  
      @param params - Contains one property, `media`.
  
        - `media` will be converted to a `Blob`
  
      @experimental
  
      @remarks
      Use `sendRealtimeInput` for realtime audio chunks and video frames (images).
  
      With `sendRealtimeInput` the api will respond to audio automatically
      based on voice activity detection (VAD).
  
      `sendRealtimeInput` is optimized for responsivness at the expense of
      deterministic ordering guarantees. Audio and video tokens are to the
      context when they become available.
  
      Note: The Call signature expects a `Blob` object, but only a subset
      of audio and image mimetypes are allowed.
     */
    sendRealtimeInput(params) {
        let clientMessage = {};
        if (this.apiClient.isVertexAI()) {
            clientMessage = {
                'realtimeInput': liveSendRealtimeInputParametersToVertex(this.apiClient, params),
            };
        }
        else {
            clientMessage = {
                'realtimeInput': liveSendRealtimeInputParametersToMldev(this.apiClient, params),
            };
        }
        this.conn.send(JSON.stringify(clientMessage));
    }
    /**
      Send a function response message over the established connection.
  
      @param params - Contains property `functionResponses`.
  
        - `functionResponses` will be converted to a `functionResponses[]`
  
      @remarks
      Use `sendFunctionResponse` to reply to `LiveServerToolCall` from the server.
  
      Use {@link types.LiveConnectConfig#tools} to configure the callable functions.
  
      @experimental
     */
    sendToolResponse(params) {
        if (params.functionResponses == null) {
            throw new Error('Tool response parameters are required.');
        }
        const clientMessage = this.tLiveClienttToolResponse(this.apiClient, params);
        this.conn.send(JSON.stringify(clientMessage));
    }
    /**
       Terminates the WebSocket connection.
  
       @experimental
  
       @example
       ```ts
       let model: string;
       if (GOOGLE_GENAI_USE_VERTEXAI) {
         model = 'gemini-2.0-flash-live-preview-04-09';
       } else {
         model = 'gemini-2.0-flash-live-001';
       }
       const session = await ai.live.connect({
         model: model,
         config: {
           responseModalities: [Modality.AUDIO],
         }
       });
  
       session.close();
       ```
     */
    close() {
        this.conn.close();
    }
}
// Converts an headers object to a "map" object as expected by the WebSocket
// constructor. We use this as the Auth interface works with Headers objects
// while the WebSocket constructor takes a map.
function headersToMap(headers) {
    const headerMap = {};
    headers.forEach((value, key) => {
        headerMap[key] = value;
    });
    return headerMap;
}
// Converts a "map" object to a headers object. We use this as the Auth
// interface works with Headers objects while the API client default headers
// returns a map.
function mapToHeaders(map) {
    const headers = new Headers();
    for (const [key, value] of Object.entries(map)) {
        headers.append(key, value);
    }
    return headers;
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Models extends BaseModule {
    constructor(apiClient) {
        super();
        this.apiClient = apiClient;
        /**
         * Makes an API request to generate content with a given model.
         *
         * For the `model` parameter, supported formats for Vertex AI API include:
         * - The Gemini model ID, for example: 'gemini-2.0-flash'
         * - The full resource name starts with 'projects/', for example:
         *  'projects/my-project-id/locations/us-central1/publishers/google/models/gemini-2.0-flash'
         * - The partial resource name with 'publishers/', for example:
         *  'publishers/google/models/gemini-2.0-flash' or
         *  'publishers/meta/models/llama-3.1-405b-instruct-maas'
         * - `/` separated publisher and model name, for example:
         * 'google/gemini-2.0-flash' or 'meta/llama-3.1-405b-instruct-maas'
         *
         * For the `model` parameter, supported formats for Gemini API include:
         * - The Gemini model ID, for example: 'gemini-2.0-flash'
         * - The model name starts with 'models/', for example:
         *  'models/gemini-2.0-flash'
         * - For tuned models, the model name starts with 'tunedModels/',
         * for example:
         * 'tunedModels/1234567890123456789'
         *
         * Some models support multimodal input and output.
         *
         * @param params - The parameters for generating content.
         * @return The response from generating content.
         *
         * @example
         * ```ts
         * const response = await ai.models.generateContent({
         *   model: 'gemini-2.0-flash',
         *   contents: 'why is the sky blue?',
         *   config: {
         *     candidateCount: 2,
         *   }
         * });
         * console.log(response);
         * ```
         */
        this.generateContent = async (params) => {
            return await this.generateContentInternal(params);
        };
        /**
         * Makes an API request to generate content with a given model and yields the
         * response in chunks.
         *
         * For the `model` parameter, supported formats for Vertex AI API include:
         * - The Gemini model ID, for example: 'gemini-2.0-flash'
         * - The full resource name starts with 'projects/', for example:
         *  'projects/my-project-id/locations/us-central1/publishers/google/models/gemini-2.0-flash'
         * - The partial resource name with 'publishers/', for example:
         *  'publishers/google/models/gemini-2.0-flash' or
         *  'publishers/meta/models/llama-3.1-405b-instruct-maas'
         * - `/` separated publisher and model name, for example:
         * 'google/gemini-2.0-flash' or 'meta/llama-3.1-405b-instruct-maas'
         *
         * For the `model` parameter, supported formats for Gemini API include:
         * - The Gemini model ID, for example: 'gemini-2.0-flash'
         * - The model name starts with 'models/', for example:
         *  'models/gemini-2.0-flash'
         * - For tuned models, the model name starts with 'tunedModels/',
         * for example:
         *  'tunedModels/1234567890123456789'
         *
         * Some models support multimodal input and output.
         *
         * @param params - The parameters for generating content with streaming response.
         * @return The response from generating content.
         *
         * @example
         * ```ts
         * const response = await ai.models.generateContentStream({
         *   model: 'gemini-2.0-flash',
         *   contents: 'why is the sky blue?',
         *   config: {
         *     maxOutputTokens: 200,
         *   }
         * });
         * for await (const chunk of response) {
         *   console.log(chunk);
         * }
         * ```
         */
        this.generateContentStream = async (params) => {
            return await this.generateContentStreamInternal(params);
        };
        /**
         * Generates an image based on a text description and configuration.
         *
         * @param model - The model to use.
         * @param prompt - A text description of the image to generate.
         * @param [config] - The config for image generation.
         * @return The response from the API.
         *
         * @example
         * ```ts
         * const response = await client.models.generateImages({
         *  model: 'imagen-3.0-generate-002',
         *  prompt: 'Robot holding a red skateboard',
         *  config: {
         *    numberOfImages: 1,
         *    includeRaiReason: true,
         *  },
         * });
         * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
         * ```
         */
        this.generateImages = async (params) => {
            return await this.generateImagesInternal(params).then((apiResponse) => {
                var _a;
                let positivePromptSafetyAttributes;
                const generatedImages = [];
                if (apiResponse === null || apiResponse === void 0 ? void 0 : apiResponse.generatedImages) {
                    for (const generatedImage of apiResponse.generatedImages) {
                        if (generatedImage &&
                            (generatedImage === null || generatedImage === void 0 ? void 0 : generatedImage.safetyAttributes) &&
                            ((_a = generatedImage === null || generatedImage === void 0 ? void 0 : generatedImage.safetyAttributes) === null || _a === void 0 ? void 0 : _a.contentType) === 'Positive Prompt') {
                            positivePromptSafetyAttributes = generatedImage === null || generatedImage === void 0 ? void 0 : generatedImage.safetyAttributes;
                        }
                        else {
                            generatedImages.push(generatedImage);
                        }
                    }
                }
                let response;
                if (positivePromptSafetyAttributes) {
                    response = {
                        generatedImages: generatedImages,
                        positivePromptSafetyAttributes: positivePromptSafetyAttributes,
                    };
                }
                else {
                    response = {
                        generatedImages: generatedImages,
                    };
                }
                return response;
            });
        };
        this.list = async (params) => {
            var _a;
            const defaultConfig = {
                queryBase: true,
            };
            const actualConfig = Object.assign(Object.assign({}, defaultConfig), params === null || params === void 0 ? void 0 : params.config);
            const actualParams = {
                config: actualConfig,
            };
            if (this.apiClient.isVertexAI()) {
                if (!actualParams.config.queryBase) {
                    if ((_a = actualParams.config) === null || _a === void 0 ? void 0 : _a.filter) {
                        throw new Error('Filtering tuned models list for Vertex AI is not currently supported');
                    }
                    else {
                        actualParams.config.filter = 'labels.tune-type:*';
                    }
                }
            }
            return new Pager(PagedItem.PAGED_ITEM_MODELS, (x) => this.listInternal(x), await this.listInternal(actualParams), actualParams);
        };
    }
    async generateContentInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = generateContentParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:generateContent', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = generateContentResponseFromVertex(this.apiClient, apiResponse);
                const typedResp = new GenerateContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
        else {
            const body = generateContentParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:generateContent', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = generateContentResponseFromMldev(this.apiClient, apiResponse);
                const typedResp = new GenerateContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    async generateContentStreamInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = generateContentParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:streamGenerateContent?alt=sse', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            const apiClient = this.apiClient;
            response = apiClient.requestStream({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            });
            return response.then(function (apiResponse) {
                return __asyncGenerator(this, arguments, function* () {
                    var _a, e_1, _b, _c;
                    try {
                        for (var _d = true, apiResponse_1 = __asyncValues(apiResponse), apiResponse_1_1; apiResponse_1_1 = yield __await(apiResponse_1.next()), _a = apiResponse_1_1.done, !_a; _d = true) {
                            _c = apiResponse_1_1.value;
                            _d = false;
                            const chunk = _c;
                            const resp = generateContentResponseFromVertex(apiClient, (yield __await(chunk.json())));
                            const typedResp = new GenerateContentResponse();
                            Object.assign(typedResp, resp);
                            yield yield __await(typedResp);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (!_d && !_a && (_b = apiResponse_1.return)) yield __await(_b.call(apiResponse_1));
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                });
            });
        }
        else {
            const body = generateContentParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:streamGenerateContent?alt=sse', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            const apiClient = this.apiClient;
            response = apiClient.requestStream({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            });
            return response.then(function (apiResponse) {
                return __asyncGenerator(this, arguments, function* () {
                    var _a, e_2, _b, _c;
                    try {
                        for (var _d = true, apiResponse_2 = __asyncValues(apiResponse), apiResponse_2_1; apiResponse_2_1 = yield __await(apiResponse_2.next()), _a = apiResponse_2_1.done, !_a; _d = true) {
                            _c = apiResponse_2_1.value;
                            _d = false;
                            const chunk = _c;
                            const resp = generateContentResponseFromMldev(apiClient, (yield __await(chunk.json())));
                            const typedResp = new GenerateContentResponse();
                            Object.assign(typedResp, resp);
                            yield yield __await(typedResp);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (!_d && !_a && (_b = apiResponse_2.return)) yield __await(_b.call(apiResponse_2));
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                });
            });
        }
    }
    /**
     * Calculates embeddings for the given contents. Only text is supported.
     *
     * @param params - The parameters for embedding contents.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.embedContent({
     *  model: 'text-embedding-004',
     *  contents: [
     *    'What is your name?',
     *    'What is your favorite color?',
     *  ],
     *  config: {
     *    outputDimensionality: 64,
     *  },
     * });
     * console.log(response);
     * ```
     */
    async embedContent(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = embedContentParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:predict', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = embedContentResponseFromVertex(this.apiClient, apiResponse);
                const typedResp = new EmbedContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
        else {
            const body = embedContentParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:batchEmbedContents', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = embedContentResponseFromMldev(this.apiClient, apiResponse);
                const typedResp = new EmbedContentResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Generates an image based on a text description and configuration.
     *
     * @param params - The parameters for generating images.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.generateImages({
     *  model: 'imagen-3.0-generate-002',
     *  prompt: 'Robot holding a red skateboard',
     *  config: {
     *    numberOfImages: 1,
     *    includeRaiReason: true,
     *  },
     * });
     * console.log(response?.generatedImages?.[0]?.image?.imageBytes);
     * ```
     */
    async generateImagesInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = generateImagesParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:predict', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = generateImagesResponseFromVertex(this.apiClient, apiResponse);
                const typedResp = new GenerateImagesResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
        else {
            const body = generateImagesParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:predict', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = generateImagesResponseFromMldev(this.apiClient, apiResponse);
                const typedResp = new GenerateImagesResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Fetches information about a model by name.
     *
     * @example
     * ```ts
     * const modelInfo = await ai.models.get({model: 'gemini-2.0-flash'});
     * ```
     */
    async get(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = getModelParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = modelFromVertex(this.apiClient, apiResponse);
                return resp;
            });
        }
        else {
            const body = getModelParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = modelFromMldev(this.apiClient, apiResponse);
                return resp;
            });
        }
    }
    async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = listModelsParametersToVertex(this.apiClient, params);
            path = formatMap('{models_url}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = listModelsResponseFromVertex(this.apiClient, apiResponse);
                const typedResp = new ListModelsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
        else {
            const body = listModelsParametersToMldev(this.apiClient, params);
            path = formatMap('{models_url}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = listModelsResponseFromMldev(this.apiClient, apiResponse);
                const typedResp = new ListModelsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Updates a tuned model by its name.
     *
     * @param params - The parameters for updating the model.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.update({
     *   model: 'tuned-model-name',
     *   config: {
     *     displayName: 'New display name',
     *     description: 'New description',
     *   },
     * });
     * ```
     */
    async update(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = updateModelParametersToVertex(this.apiClient, params);
            path = formatMap('{model}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'PATCH',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = modelFromVertex(this.apiClient, apiResponse);
                return resp;
            });
        }
        else {
            const body = updateModelParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'PATCH',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = modelFromMldev(this.apiClient, apiResponse);
                return resp;
            });
        }
    }
    /**
     * Deletes a tuned model by its name.
     *
     * @param params - The parameters for deleting the model.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.delete({model: 'tuned-model-name'});
     * ```
     */
    async delete(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = deleteModelParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then(() => {
                const resp = deleteModelResponseFromVertex();
                const typedResp = new DeleteModelResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
        else {
            const body = deleteModelParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'DELETE',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then(() => {
                const resp = deleteModelResponseFromMldev();
                const typedResp = new DeleteModelResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Counts the number of tokens in the given contents. Multimodal input is
     * supported for Gemini models.
     *
     * @param params - The parameters for counting tokens.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.countTokens({
     *  model: 'gemini-2.0-flash',
     *  contents: 'The quick brown fox jumps over the lazy dog.'
     * });
     * console.log(response);
     * ```
     */
    async countTokens(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = countTokensParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:countTokens', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = countTokensResponseFromVertex(this.apiClient, apiResponse);
                const typedResp = new CountTokensResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
        else {
            const body = countTokensParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:countTokens', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = countTokensResponseFromMldev(this.apiClient, apiResponse);
                const typedResp = new CountTokensResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    /**
     * Given a list of contents, returns a corresponding TokensInfo containing
     * the list of tokens and list of token ids.
     *
     * This method is not supported by the Gemini Developer API.
     *
     * @param params - The parameters for computing tokens.
     * @return The response from the API.
     *
     * @example
     * ```ts
     * const response = await ai.models.computeTokens({
     *  model: 'gemini-2.0-flash',
     *  contents: 'What is your name?'
     * });
     * console.log(response);
     * ```
     */
    async computeTokens(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = computeTokensParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:computeTokens', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = computeTokensResponseFromVertex(this.apiClient, apiResponse);
                const typedResp = new ComputeTokensResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
        else {
            throw new Error('This method is only supported by the Vertex AI.');
        }
    }
    /**
     *  Generates videos based on a text description and configuration.
     *
     * @param params - The parameters for generating videos.
     * @return A Promise<GenerateVideosOperation> which allows you to track the progress and eventually retrieve the generated videos using the operations.get method.
     *
     * @example
     * ```ts
     * const operation = await ai.models.generateVideos({
     *  model: 'veo-2.0-generate-001',
     *  prompt: 'A neon hologram of a cat driving at top speed',
     *  config: {
     *    numberOfVideos: 1
     * });
     *
     * while (!operation.done) {
     *   await new Promise(resolve => setTimeout(resolve, 10000));
     *   operation = await ai.operations.getVideosOperation({operation: operation});
     * }
     *
     * console.log(operation.response?.generatedVideos?.[0]?.video?.uri);
     * ```
     */
    async generateVideos(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = generateVideosParametersToVertex(this.apiClient, params);
            path = formatMap('{model}:predictLongRunning', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = generateVideosOperationFromVertex$1(this.apiClient, apiResponse);
                return resp;
            });
        }
        else {
            const body = generateVideosParametersToMldev(this.apiClient, params);
            path = formatMap('{model}:predictLongRunning', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = generateVideosOperationFromMldev$1(this.apiClient, apiResponse);
                return resp;
            });
        }
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function getOperationParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromOperationName = getValueByPath(fromObject, [
        'operationName',
    ]);
    if (fromOperationName != null) {
        setValueByPath(toObject, ['_url', 'operationName'], fromOperationName);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function getOperationParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromOperationName = getValueByPath(fromObject, [
        'operationName',
    ]);
    if (fromOperationName != null) {
        setValueByPath(toObject, ['_url', 'operationName'], fromOperationName);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function fetchPredictOperationParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromOperationName = getValueByPath(fromObject, [
        'operationName',
    ]);
    if (fromOperationName != null) {
        setValueByPath(toObject, ['operationName'], fromOperationName);
    }
    const fromResourceName = getValueByPath(fromObject, ['resourceName']);
    if (fromResourceName != null) {
        setValueByPath(toObject, ['_url', 'resourceName'], fromResourceName);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function videoFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromUri = getValueByPath(fromObject, ['video', 'uri']);
    if (fromUri != null) {
        setValueByPath(toObject, ['uri'], fromUri);
    }
    const fromVideoBytes = getValueByPath(fromObject, [
        'video',
        'encodedVideo',
    ]);
    if (fromVideoBytes != null) {
        setValueByPath(toObject, ['videoBytes'], tBytes(apiClient, fromVideoBytes));
    }
    const fromMimeType = getValueByPath(fromObject, ['encoding']);
    if (fromMimeType != null) {
        setValueByPath(toObject, ['mimeType'], fromMimeType);
    }
    return toObject;
}
function generatedVideoFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromVideo = getValueByPath(fromObject, ['_self']);
    if (fromVideo != null) {
        setValueByPath(toObject, ['video'], videoFromMldev(apiClient, fromVideo));
    }
    return toObject;
}
function generateVideosResponseFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromGeneratedVideos = getValueByPath(fromObject, [
        'generatedSamples',
    ]);
    if (fromGeneratedVideos != null) {
        let transformedList = fromGeneratedVideos;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return generatedVideoFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['generatedVideos'], transformedList);
    }
    const fromRaiMediaFilteredCount = getValueByPath(fromObject, [
        'raiMediaFilteredCount',
    ]);
    if (fromRaiMediaFilteredCount != null) {
        setValueByPath(toObject, ['raiMediaFilteredCount'], fromRaiMediaFilteredCount);
    }
    const fromRaiMediaFilteredReasons = getValueByPath(fromObject, [
        'raiMediaFilteredReasons',
    ]);
    if (fromRaiMediaFilteredReasons != null) {
        setValueByPath(toObject, ['raiMediaFilteredReasons'], fromRaiMediaFilteredReasons);
    }
    return toObject;
}
function generateVideosOperationFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromMetadata = getValueByPath(fromObject, ['metadata']);
    if (fromMetadata != null) {
        setValueByPath(toObject, ['metadata'], fromMetadata);
    }
    const fromDone = getValueByPath(fromObject, ['done']);
    if (fromDone != null) {
        setValueByPath(toObject, ['done'], fromDone);
    }
    const fromError = getValueByPath(fromObject, ['error']);
    if (fromError != null) {
        setValueByPath(toObject, ['error'], fromError);
    }
    const fromResponse = getValueByPath(fromObject, [
        'response',
        'generateVideoResponse',
    ]);
    if (fromResponse != null) {
        setValueByPath(toObject, ['response'], generateVideosResponseFromMldev(apiClient, fromResponse));
    }
    return toObject;
}
function videoFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromUri = getValueByPath(fromObject, ['gcsUri']);
    if (fromUri != null) {
        setValueByPath(toObject, ['uri'], fromUri);
    }
    const fromVideoBytes = getValueByPath(fromObject, [
        'bytesBase64Encoded',
    ]);
    if (fromVideoBytes != null) {
        setValueByPath(toObject, ['videoBytes'], tBytes(apiClient, fromVideoBytes));
    }
    const fromMimeType = getValueByPath(fromObject, ['mimeType']);
    if (fromMimeType != null) {
        setValueByPath(toObject, ['mimeType'], fromMimeType);
    }
    return toObject;
}
function generatedVideoFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromVideo = getValueByPath(fromObject, ['_self']);
    if (fromVideo != null) {
        setValueByPath(toObject, ['video'], videoFromVertex(apiClient, fromVideo));
    }
    return toObject;
}
function generateVideosResponseFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromGeneratedVideos = getValueByPath(fromObject, ['videos']);
    if (fromGeneratedVideos != null) {
        let transformedList = fromGeneratedVideos;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return generatedVideoFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['generatedVideos'], transformedList);
    }
    const fromRaiMediaFilteredCount = getValueByPath(fromObject, [
        'raiMediaFilteredCount',
    ]);
    if (fromRaiMediaFilteredCount != null) {
        setValueByPath(toObject, ['raiMediaFilteredCount'], fromRaiMediaFilteredCount);
    }
    const fromRaiMediaFilteredReasons = getValueByPath(fromObject, [
        'raiMediaFilteredReasons',
    ]);
    if (fromRaiMediaFilteredReasons != null) {
        setValueByPath(toObject, ['raiMediaFilteredReasons'], fromRaiMediaFilteredReasons);
    }
    return toObject;
}
function generateVideosOperationFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromMetadata = getValueByPath(fromObject, ['metadata']);
    if (fromMetadata != null) {
        setValueByPath(toObject, ['metadata'], fromMetadata);
    }
    const fromDone = getValueByPath(fromObject, ['done']);
    if (fromDone != null) {
        setValueByPath(toObject, ['done'], fromDone);
    }
    const fromError = getValueByPath(fromObject, ['error']);
    if (fromError != null) {
        setValueByPath(toObject, ['error'], fromError);
    }
    const fromResponse = getValueByPath(fromObject, ['response']);
    if (fromResponse != null) {
        setValueByPath(toObject, ['response'], generateVideosResponseFromVertex(apiClient, fromResponse));
    }
    return toObject;
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Operations extends BaseModule {
    constructor(apiClient) {
        super();
        this.apiClient = apiClient;
    }
    /**
     * Gets the status of a long-running operation.
     *
     * @param parameters The parameters for the get operation request.
     * @return The updated Operation object, with the latest status or result.
     */
    async getVideosOperation(parameters) {
        const operation = parameters.operation;
        const config = parameters.config;
        if (operation.name === undefined || operation.name === '') {
            throw new Error('Operation name is required.');
        }
        if (this.apiClient.isVertexAI()) {
            const resourceName = operation.name.split('/operations/')[0];
            let httpOptions = undefined;
            if (config && 'httpOptions' in config) {
                httpOptions = config.httpOptions;
            }
            return this.fetchPredictVideosOperationInternal({
                operationName: operation.name,
                resourceName: resourceName,
                config: { httpOptions: httpOptions },
            });
        }
        else {
            return this.getVideosOperationInternal({
                operationName: operation.name,
                config: config,
            });
        }
    }
    async getVideosOperationInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = getOperationParametersToVertex(this.apiClient, params);
            path = formatMap('{operationName}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = generateVideosOperationFromVertex(this.apiClient, apiResponse);
                return resp;
            });
        }
        else {
            const body = getOperationParametersToMldev(this.apiClient, params);
            path = formatMap('{operationName}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = generateVideosOperationFromMldev(this.apiClient, apiResponse);
                return resp;
            });
        }
    }
    async fetchPredictVideosOperationInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = fetchPredictOperationParametersToVertex(this.apiClient, params);
            path = formatMap('{resourceName}:fetchPredictOperation', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = generateVideosOperationFromVertex(this.apiClient, apiResponse);
                return resp;
            });
        }
        else {
            throw new Error('This method is only supported by the Vertex AI.');
        }
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const CONTENT_TYPE_HEADER = 'Content-Type';
const SERVER_TIMEOUT_HEADER = 'X-Server-Timeout';
const USER_AGENT_HEADER = 'User-Agent';
const GOOGLE_API_CLIENT_HEADER = 'x-goog-api-client';
const SDK_VERSION = '0.13.0'; // x-release-please-version
const LIBRARY_LABEL = `google-genai-sdk/${SDK_VERSION}`;
const VERTEX_AI_API_DEFAULT_VERSION = 'v1beta1';
const GOOGLE_AI_API_DEFAULT_VERSION = 'v1beta';
const responseLineRE = /^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Client errors raised by the GenAI API.
 */
class ClientError extends Error {
    constructor(message, stackTrace) {
        if (stackTrace) {
            super(message, { cause: stackTrace });
        }
        else {
            super(message, { cause: new Error().stack });
        }
        this.message = message;
        this.name = 'ClientError';
    }
}
/**
 * Server errors raised by the GenAI API.
 */
class ServerError extends Error {
    constructor(message, stackTrace) {
        if (stackTrace) {
            super(message, { cause: stackTrace });
        }
        else {
            super(message, { cause: new Error().stack });
        }
        this.message = message;
        this.name = 'ServerError';
    }
}
/**
 * The ApiClient class is used to send requests to the Gemini API or Vertex AI
 * endpoints.
 */
class ApiClient {
    constructor(opts) {
        var _a, _b;
        this.clientOptions = Object.assign(Object.assign({}, opts), { project: opts.project, location: opts.location, apiKey: opts.apiKey, vertexai: opts.vertexai });
        const initHttpOptions = {};
        if (this.clientOptions.vertexai) {
            initHttpOptions.apiVersion =
                (_a = this.clientOptions.apiVersion) !== null && _a !== void 0 ? _a : VERTEX_AI_API_DEFAULT_VERSION;
            initHttpOptions.baseUrl = this.baseUrlFromProjectLocation();
            this.normalizeAuthParameters();
        }
        else {
            // Gemini API
            initHttpOptions.apiVersion =
                (_b = this.clientOptions.apiVersion) !== null && _b !== void 0 ? _b : GOOGLE_AI_API_DEFAULT_VERSION;
            initHttpOptions.baseUrl = `https://generativelanguage.googleapis.com/`;
        }
        initHttpOptions.headers = this.getDefaultHeaders();
        this.clientOptions.httpOptions = initHttpOptions;
        if (opts.httpOptions) {
            this.clientOptions.httpOptions = this.patchHttpOptions(initHttpOptions, opts.httpOptions);
        }
    }
    /**
     * Determines the base URL for Vertex AI based on project and location.
     * Uses the global endpoint if location is 'global' or if project/location
     * are not specified (implying API key usage).
     * @private
     */
    baseUrlFromProjectLocation() {
        if (this.clientOptions.project &&
            this.clientOptions.location &&
            this.clientOptions.location !== 'global') {
            // Regional endpoint
            return `https://${this.clientOptions.location}-aiplatform.googleapis.com/`;
        }
        // Global endpoint (covers 'global' location and API key usage)
        return `https://aiplatform.googleapis.com/`;
    }
    /**
     * Normalizes authentication parameters for Vertex AI.
     * If project and location are provided, API key is cleared.
     * If project and location are not provided (implying API key usage),
     * project and location are cleared.
     * @private
     */
    normalizeAuthParameters() {
        if (this.clientOptions.project && this.clientOptions.location) {
            // Using project/location for auth, clear potential API key
            this.clientOptions.apiKey = undefined;
            return;
        }
        // Using API key for auth (or no auth provided yet), clear project/location
        this.clientOptions.project = undefined;
        this.clientOptions.location = undefined;
    }
    isVertexAI() {
        var _a;
        return (_a = this.clientOptions.vertexai) !== null && _a !== void 0 ? _a : false;
    }
    getProject() {
        return this.clientOptions.project;
    }
    getLocation() {
        return this.clientOptions.location;
    }
    getApiVersion() {
        if (this.clientOptions.httpOptions &&
            this.clientOptions.httpOptions.apiVersion !== undefined) {
            return this.clientOptions.httpOptions.apiVersion;
        }
        throw new Error('API version is not set.');
    }
    getBaseUrl() {
        if (this.clientOptions.httpOptions &&
            this.clientOptions.httpOptions.baseUrl !== undefined) {
            return this.clientOptions.httpOptions.baseUrl;
        }
        throw new Error('Base URL is not set.');
    }
    getRequestUrl() {
        return this.getRequestUrlInternal(this.clientOptions.httpOptions);
    }
    getHeaders() {
        if (this.clientOptions.httpOptions &&
            this.clientOptions.httpOptions.headers !== undefined) {
            return this.clientOptions.httpOptions.headers;
        }
        else {
            throw new Error('Headers are not set.');
        }
    }
    getRequestUrlInternal(httpOptions) {
        if (!httpOptions ||
            httpOptions.baseUrl === undefined ||
            httpOptions.apiVersion === undefined) {
            throw new Error('HTTP options are not correctly set.');
        }
        const baseUrl = httpOptions.baseUrl.endsWith('/')
            ? httpOptions.baseUrl.slice(0, -1)
            : httpOptions.baseUrl;
        const urlElement = [baseUrl];
        if (httpOptions.apiVersion && httpOptions.apiVersion !== '') {
            urlElement.push(httpOptions.apiVersion);
        }
        return urlElement.join('/');
    }
    getBaseResourcePath() {
        return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`;
    }
    getApiKey() {
        return this.clientOptions.apiKey;
    }
    getWebsocketBaseUrl() {
        const baseUrl = this.getBaseUrl();
        const urlParts = new URL(baseUrl);
        urlParts.protocol = urlParts.protocol == 'http:' ? 'ws' : 'wss';
        return urlParts.toString();
    }
    setBaseUrl(url) {
        if (this.clientOptions.httpOptions) {
            this.clientOptions.httpOptions.baseUrl = url;
        }
        else {
            throw new Error('HTTP options are not correctly set.');
        }
    }
    constructUrl(path, httpOptions, prependProjectLocation) {
        const urlElement = [this.getRequestUrlInternal(httpOptions)];
        if (prependProjectLocation) {
            urlElement.push(this.getBaseResourcePath());
        }
        if (path !== '') {
            urlElement.push(path);
        }
        const url = new URL(`${urlElement.join('/')}`);
        return url;
    }
    shouldPrependVertexProjectPath(request) {
        if (this.clientOptions.apiKey) {
            return false;
        }
        if (!this.clientOptions.vertexai) {
            return false;
        }
        if (request.path.startsWith('projects/')) {
            // Assume the path already starts with
            // `projects/<project>/location/<location>`.
            return false;
        }
        if (request.httpMethod === 'GET' &&
            request.path.startsWith('publishers/google/models')) {
            // These paths are used by Vertex's models.get and models.list
            // calls. For base models Vertex does not accept a project/location
            // prefix (for tuned model the prefix is required).
            return false;
        }
        return true;
    }
    async request(request) {
        let patchedHttpOptions = this.clientOptions.httpOptions;
        if (request.httpOptions) {
            patchedHttpOptions = this.patchHttpOptions(this.clientOptions.httpOptions, request.httpOptions);
        }
        const prependProjectLocation = this.shouldPrependVertexProjectPath(request);
        const url = this.constructUrl(request.path, patchedHttpOptions, prependProjectLocation);
        if (request.queryParams) {
            for (const [key, value] of Object.entries(request.queryParams)) {
                url.searchParams.append(key, String(value));
            }
        }
        let requestInit = {};
        if (request.httpMethod === 'GET') {
            if (request.body && request.body !== '{}') {
                throw new Error('Request body should be empty for GET request, but got non empty request body');
            }
        }
        else {
            requestInit.body = request.body;
        }
        requestInit = await this.includeExtraHttpOptionsToRequestInit(requestInit, patchedHttpOptions, request.abortSignal);
        return this.unaryApiCall(url, requestInit, request.httpMethod);
    }
    patchHttpOptions(baseHttpOptions, requestHttpOptions) {
        const patchedHttpOptions = JSON.parse(JSON.stringify(baseHttpOptions));
        for (const [key, value] of Object.entries(requestHttpOptions)) {
            // Records compile to objects.
            if (typeof value === 'object') {
                // @ts-expect-error TS2345TS7053: Element implicitly has an 'any' type
                // because expression of type 'string' can't be used to index type
                // 'HttpOptions'.
                patchedHttpOptions[key] = Object.assign(Object.assign({}, patchedHttpOptions[key]), value);
            }
            else if (value !== undefined) {
                // @ts-expect-error TS2345TS7053: Element implicitly has an 'any' type
                // because expression of type 'string' can't be used to index type
                // 'HttpOptions'.
                patchedHttpOptions[key] = value;
            }
        }
        return patchedHttpOptions;
    }
    async requestStream(request) {
        let patchedHttpOptions = this.clientOptions.httpOptions;
        if (request.httpOptions) {
            patchedHttpOptions = this.patchHttpOptions(this.clientOptions.httpOptions, request.httpOptions);
        }
        const prependProjectLocation = this.shouldPrependVertexProjectPath(request);
        const url = this.constructUrl(request.path, patchedHttpOptions, prependProjectLocation);
        if (!url.searchParams.has('alt') || url.searchParams.get('alt') !== 'sse') {
            url.searchParams.set('alt', 'sse');
        }
        let requestInit = {};
        requestInit.body = request.body;
        requestInit = await this.includeExtraHttpOptionsToRequestInit(requestInit, patchedHttpOptions, request.abortSignal);
        return this.streamApiCall(url, requestInit, request.httpMethod);
    }
    async includeExtraHttpOptionsToRequestInit(requestInit, httpOptions, abortSignal) {
        if ((httpOptions && httpOptions.timeout) || abortSignal) {
            const abortController = new AbortController();
            const signal = abortController.signal;
            if (httpOptions.timeout && (httpOptions === null || httpOptions === void 0 ? void 0 : httpOptions.timeout) > 0) {
                setTimeout(() => abortController.abort(), httpOptions.timeout);
            }
            if (abortSignal) {
                abortSignal.addEventListener('abort', () => {
                    abortController.abort();
                });
            }
            requestInit.signal = signal;
        }
        requestInit.headers = await this.getHeadersInternal(httpOptions);
        return requestInit;
    }
    async unaryApiCall(url, requestInit, httpMethod) {
        return this.apiCall(url.toString(), Object.assign(Object.assign({}, requestInit), { method: httpMethod }))
            .then(async (response) => {
            await throwErrorIfNotOK(response);
            return new HttpResponse(response);
        })
            .catch((e) => {
            if (e instanceof Error) {
                throw e;
            }
            else {
                throw new Error(JSON.stringify(e));
            }
        });
    }
    async streamApiCall(url, requestInit, httpMethod) {
        return this.apiCall(url.toString(), Object.assign(Object.assign({}, requestInit), { method: httpMethod }))
            .then(async (response) => {
            await throwErrorIfNotOK(response);
            return this.processStreamResponse(response);
        })
            .catch((e) => {
            if (e instanceof Error) {
                throw e;
            }
            else {
                throw new Error(JSON.stringify(e));
            }
        });
    }
    processStreamResponse(response) {
        var _a;
        return __asyncGenerator(this, arguments, function* processStreamResponse_1() {
            const reader = (_a = response === null || response === void 0 ? void 0 : response.body) === null || _a === void 0 ? void 0 : _a.getReader();
            const decoder = new TextDecoder('utf-8');
            if (!reader) {
                throw new Error('Response body is empty');
            }
            try {
                let buffer = '';
                while (true) {
                    const { done, value } = yield __await(reader.read());
                    if (done) {
                        if (buffer.trim().length > 0) {
                            throw new Error('Incomplete JSON segment at the end');
                        }
                        break;
                    }
                    const chunkString = decoder.decode(value);
                    // Parse and throw an error if the chunk contains an error.
                    try {
                        const chunkJson = JSON.parse(chunkString);
                        if ('error' in chunkJson) {
                            const errorJson = JSON.parse(JSON.stringify(chunkJson['error']));
                            const status = errorJson['status'];
                            const code = errorJson['code'];
                            const errorMessage = `got status: ${status}. ${JSON.stringify(chunkJson)}`;
                            if (code >= 400 && code < 500) {
                                const clientError = new ClientError(errorMessage);
                                throw clientError;
                            }
                            else if (code >= 500 && code < 600) {
                                const serverError = new ServerError(errorMessage);
                                throw serverError;
                            }
                        }
                    }
                    catch (e) {
                        const error = e;
                        if (error.name === 'ClientError' || error.name === 'ServerError') {
                            throw e;
                        }
                    }
                    buffer += chunkString;
                    let match = buffer.match(responseLineRE);
                    while (match) {
                        const processedChunkString = match[1];
                        try {
                            const partialResponse = new Response(processedChunkString, {
                                headers: response === null || response === void 0 ? void 0 : response.headers,
                                status: response === null || response === void 0 ? void 0 : response.status,
                                statusText: response === null || response === void 0 ? void 0 : response.statusText,
                            });
                            yield yield __await(new HttpResponse(partialResponse));
                            buffer = buffer.slice(match[0].length);
                            match = buffer.match(responseLineRE);
                        }
                        catch (e) {
                            throw new Error(`exception parsing stream chunk ${processedChunkString}. ${e}`);
                        }
                    }
                }
            }
            finally {
                reader.releaseLock();
            }
        });
    }
    async apiCall(url, requestInit) {
        return fetch(url, requestInit).catch((e) => {
            throw new Error(`exception ${e} sending request`);
        });
    }
    getDefaultHeaders() {
        const headers = {};
        const versionHeaderValue = LIBRARY_LABEL + ' ' + this.clientOptions.userAgentExtra;
        headers[USER_AGENT_HEADER] = versionHeaderValue;
        headers[GOOGLE_API_CLIENT_HEADER] = versionHeaderValue;
        headers[CONTENT_TYPE_HEADER] = 'application/json';
        return headers;
    }
    async getHeadersInternal(httpOptions) {
        const headers = new Headers();
        if (httpOptions && httpOptions.headers) {
            for (const [key, value] of Object.entries(httpOptions.headers)) {
                headers.append(key, value);
            }
            // Append a timeout header if it is set, note that the timeout option is
            // in milliseconds but the header is in seconds.
            if (httpOptions.timeout && httpOptions.timeout > 0) {
                headers.append(SERVER_TIMEOUT_HEADER, String(Math.ceil(httpOptions.timeout / 1000)));
            }
        }
        await this.clientOptions.auth.addAuthHeaders(headers);
        return headers;
    }
    /**
     * Uploads a file asynchronously using Gemini API only, this is not supported
     * in Vertex AI.
     *
     * @param file The string path to the file to be uploaded or a Blob object.
     * @param config Optional parameters specified in the `UploadFileConfig`
     *     interface. @see {@link UploadFileConfig}
     * @return A promise that resolves to a `File` object.
     * @throws An error if called on a Vertex AI client.
     * @throws An error if the `mimeType` is not provided and can not be inferred,
     */
    async uploadFile(file, config) {
        var _a;
        const fileToUpload = {};
        if (config != null) {
            fileToUpload.mimeType = config.mimeType;
            fileToUpload.name = config.name;
            fileToUpload.displayName = config.displayName;
        }
        if (fileToUpload.name && !fileToUpload.name.startsWith('files/')) {
            fileToUpload.name = `files/${fileToUpload.name}`;
        }
        const uploader = this.clientOptions.uploader;
        const fileStat = await uploader.stat(file);
        fileToUpload.sizeBytes = String(fileStat.size);
        const mimeType = (_a = config === null || config === void 0 ? void 0 : config.mimeType) !== null && _a !== void 0 ? _a : fileStat.type;
        if (mimeType === undefined || mimeType === '') {
            throw new Error('Can not determine mimeType. Please provide mimeType in the config.');
        }
        fileToUpload.mimeType = mimeType;
        const uploadUrl = await this.fetchUploadUrl(fileToUpload, config);
        return uploader.upload(file, uploadUrl, this);
    }
    /**
     * Downloads a file asynchronously to the specified path.
     *
     * @params params - The parameters for the download request, see {@link
     * DownloadFileParameters}
     */
    async downloadFile(params) {
        const downloader = this.clientOptions.downloader;
        await downloader.download(params, this);
    }
    async fetchUploadUrl(file, config) {
        var _a;
        let httpOptions = {};
        if (config === null || config === void 0 ? void 0 : config.httpOptions) {
            httpOptions = config.httpOptions;
        }
        else {
            httpOptions = {
                apiVersion: '',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Goog-Upload-Protocol': 'resumable',
                    'X-Goog-Upload-Command': 'start',
                    'X-Goog-Upload-Header-Content-Length': `${file.sizeBytes}`,
                    'X-Goog-Upload-Header-Content-Type': `${file.mimeType}`,
                },
            };
        }
        const body = {
            'file': file,
        };
        const httpResponse = await this.request({
            path: formatMap('upload/v1beta/files', body['_url']),
            body: JSON.stringify(body),
            httpMethod: 'POST',
            httpOptions,
        });
        if (!httpResponse || !(httpResponse === null || httpResponse === void 0 ? void 0 : httpResponse.headers)) {
            throw new Error('Server did not return an HttpResponse or the returned HttpResponse did not have headers.');
        }
        const uploadUrl = (_a = httpResponse === null || httpResponse === void 0 ? void 0 : httpResponse.headers) === null || _a === void 0 ? void 0 : _a['x-goog-upload-url'];
        if (uploadUrl === undefined) {
            throw new Error('Failed to get upload url. Server did not return the x-google-upload-url in the headers');
        }
        return uploadUrl;
    }
}
async function throwErrorIfNotOK(response) {
    var _a;
    if (response === undefined) {
        throw new ServerError('response is undefined');
    }
    if (!response.ok) {
        const status = response.status;
        const statusText = response.statusText;
        let errorBody;
        if ((_a = response.headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.includes('application/json')) {
            errorBody = await response.json();
        }
        else {
            errorBody = {
                error: {
                    message: await response.text(),
                    code: response.status,
                    status: response.statusText,
                },
            };
        }
        const errorMessage = `got status: ${status} ${statusText}. ${JSON.stringify(errorBody)}`;
        if (status >= 400 && status < 500) {
            const clientError = new ClientError(errorMessage);
            throw clientError;
        }
        else if (status >= 500 && status < 600) {
            const serverError = new ServerError(errorMessage);
            throw serverError;
        }
        throw new Error(errorMessage);
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function getTuningJobParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['_url', 'name'], fromName);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function listTuningJobsConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, ['pageSize']);
    if (parentObject !== undefined && fromPageSize != null) {
        setValueByPath(parentObject, ['_query', 'pageSize'], fromPageSize);
    }
    const fromPageToken = getValueByPath(fromObject, ['pageToken']);
    if (parentObject !== undefined && fromPageToken != null) {
        setValueByPath(parentObject, ['_query', 'pageToken'], fromPageToken);
    }
    const fromFilter = getValueByPath(fromObject, ['filter']);
    if (parentObject !== undefined && fromFilter != null) {
        setValueByPath(parentObject, ['_query', 'filter'], fromFilter);
    }
    return toObject;
}
function listTuningJobsParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], listTuningJobsConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function tuningExampleToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromTextInput = getValueByPath(fromObject, ['textInput']);
    if (fromTextInput != null) {
        setValueByPath(toObject, ['textInput'], fromTextInput);
    }
    const fromOutput = getValueByPath(fromObject, ['output']);
    if (fromOutput != null) {
        setValueByPath(toObject, ['output'], fromOutput);
    }
    return toObject;
}
function tuningDatasetToMldev(apiClient, fromObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['gcsUri']) !== undefined) {
        throw new Error('gcsUri parameter is not supported in Gemini API.');
    }
    const fromExamples = getValueByPath(fromObject, ['examples']);
    if (fromExamples != null) {
        let transformedList = fromExamples;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return tuningExampleToMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['examples', 'examples'], transformedList);
    }
    return toObject;
}
function createTuningJobConfigToMldev(apiClient, fromObject, parentObject) {
    const toObject = {};
    if (getValueByPath(fromObject, ['validationDataset']) !== undefined) {
        throw new Error('validationDataset parameter is not supported in Gemini API.');
    }
    const fromTunedModelDisplayName = getValueByPath(fromObject, [
        'tunedModelDisplayName',
    ]);
    if (parentObject !== undefined && fromTunedModelDisplayName != null) {
        setValueByPath(parentObject, ['displayName'], fromTunedModelDisplayName);
    }
    if (getValueByPath(fromObject, ['description']) !== undefined) {
        throw new Error('description parameter is not supported in Gemini API.');
    }
    const fromEpochCount = getValueByPath(fromObject, ['epochCount']);
    if (parentObject !== undefined && fromEpochCount != null) {
        setValueByPath(parentObject, ['tuningTask', 'hyperparameters', 'epochCount'], fromEpochCount);
    }
    const fromLearningRateMultiplier = getValueByPath(fromObject, [
        'learningRateMultiplier',
    ]);
    if (fromLearningRateMultiplier != null) {
        setValueByPath(toObject, ['tuningTask', 'hyperparameters', 'learningRateMultiplier'], fromLearningRateMultiplier);
    }
    if (getValueByPath(fromObject, ['adapterSize']) !== undefined) {
        throw new Error('adapterSize parameter is not supported in Gemini API.');
    }
    const fromBatchSize = getValueByPath(fromObject, ['batchSize']);
    if (parentObject !== undefined && fromBatchSize != null) {
        setValueByPath(parentObject, ['tuningTask', 'hyperparameters', 'batchSize'], fromBatchSize);
    }
    const fromLearningRate = getValueByPath(fromObject, ['learningRate']);
    if (parentObject !== undefined && fromLearningRate != null) {
        setValueByPath(parentObject, ['tuningTask', 'hyperparameters', 'learningRate'], fromLearningRate);
    }
    return toObject;
}
function createTuningJobParametersToMldev(apiClient, fromObject) {
    const toObject = {};
    const fromBaseModel = getValueByPath(fromObject, ['baseModel']);
    if (fromBaseModel != null) {
        setValueByPath(toObject, ['baseModel'], fromBaseModel);
    }
    const fromTrainingDataset = getValueByPath(fromObject, [
        'trainingDataset',
    ]);
    if (fromTrainingDataset != null) {
        setValueByPath(toObject, ['tuningTask', 'trainingData'], tuningDatasetToMldev(apiClient, fromTrainingDataset));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], createTuningJobConfigToMldev(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function getTuningJobParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['_url', 'name'], fromName);
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], fromConfig);
    }
    return toObject;
}
function listTuningJobsConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromPageSize = getValueByPath(fromObject, ['pageSize']);
    if (parentObject !== undefined && fromPageSize != null) {
        setValueByPath(parentObject, ['_query', 'pageSize'], fromPageSize);
    }
    const fromPageToken = getValueByPath(fromObject, ['pageToken']);
    if (parentObject !== undefined && fromPageToken != null) {
        setValueByPath(parentObject, ['_query', 'pageToken'], fromPageToken);
    }
    const fromFilter = getValueByPath(fromObject, ['filter']);
    if (parentObject !== undefined && fromFilter != null) {
        setValueByPath(parentObject, ['_query', 'filter'], fromFilter);
    }
    return toObject;
}
function listTuningJobsParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], listTuningJobsConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function tuningDatasetToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromGcsUri = getValueByPath(fromObject, ['gcsUri']);
    if (parentObject !== undefined && fromGcsUri != null) {
        setValueByPath(parentObject, ['supervisedTuningSpec', 'trainingDatasetUri'], fromGcsUri);
    }
    if (getValueByPath(fromObject, ['examples']) !== undefined) {
        throw new Error('examples parameter is not supported in Vertex AI.');
    }
    return toObject;
}
function tuningValidationDatasetToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromGcsUri = getValueByPath(fromObject, ['gcsUri']);
    if (fromGcsUri != null) {
        setValueByPath(toObject, ['validationDatasetUri'], fromGcsUri);
    }
    return toObject;
}
function createTuningJobConfigToVertex(apiClient, fromObject, parentObject) {
    const toObject = {};
    const fromValidationDataset = getValueByPath(fromObject, [
        'validationDataset',
    ]);
    if (parentObject !== undefined && fromValidationDataset != null) {
        setValueByPath(parentObject, ['supervisedTuningSpec'], tuningValidationDatasetToVertex(apiClient, fromValidationDataset));
    }
    const fromTunedModelDisplayName = getValueByPath(fromObject, [
        'tunedModelDisplayName',
    ]);
    if (parentObject !== undefined && fromTunedModelDisplayName != null) {
        setValueByPath(parentObject, ['tunedModelDisplayName'], fromTunedModelDisplayName);
    }
    const fromDescription = getValueByPath(fromObject, ['description']);
    if (parentObject !== undefined && fromDescription != null) {
        setValueByPath(parentObject, ['description'], fromDescription);
    }
    const fromEpochCount = getValueByPath(fromObject, ['epochCount']);
    if (parentObject !== undefined && fromEpochCount != null) {
        setValueByPath(parentObject, ['supervisedTuningSpec', 'hyperParameters', 'epochCount'], fromEpochCount);
    }
    const fromLearningRateMultiplier = getValueByPath(fromObject, [
        'learningRateMultiplier',
    ]);
    if (parentObject !== undefined && fromLearningRateMultiplier != null) {
        setValueByPath(parentObject, ['supervisedTuningSpec', 'hyperParameters', 'learningRateMultiplier'], fromLearningRateMultiplier);
    }
    const fromAdapterSize = getValueByPath(fromObject, ['adapterSize']);
    if (parentObject !== undefined && fromAdapterSize != null) {
        setValueByPath(parentObject, ['supervisedTuningSpec', 'hyperParameters', 'adapterSize'], fromAdapterSize);
    }
    if (getValueByPath(fromObject, ['batchSize']) !== undefined) {
        throw new Error('batchSize parameter is not supported in Vertex AI.');
    }
    if (getValueByPath(fromObject, ['learningRate']) !== undefined) {
        throw new Error('learningRate parameter is not supported in Vertex AI.');
    }
    return toObject;
}
function createTuningJobParametersToVertex(apiClient, fromObject) {
    const toObject = {};
    const fromBaseModel = getValueByPath(fromObject, ['baseModel']);
    if (fromBaseModel != null) {
        setValueByPath(toObject, ['baseModel'], fromBaseModel);
    }
    const fromTrainingDataset = getValueByPath(fromObject, [
        'trainingDataset',
    ]);
    if (fromTrainingDataset != null) {
        setValueByPath(toObject, ['supervisedTuningSpec', 'trainingDatasetUri'], tuningDatasetToVertex(apiClient, fromTrainingDataset, toObject));
    }
    const fromConfig = getValueByPath(fromObject, ['config']);
    if (fromConfig != null) {
        setValueByPath(toObject, ['config'], createTuningJobConfigToVertex(apiClient, fromConfig, toObject));
    }
    return toObject;
}
function tunedModelFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['name']);
    if (fromModel != null) {
        setValueByPath(toObject, ['model'], fromModel);
    }
    const fromEndpoint = getValueByPath(fromObject, ['name']);
    if (fromEndpoint != null) {
        setValueByPath(toObject, ['endpoint'], fromEndpoint);
    }
    return toObject;
}
function tuningJobFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromState = getValueByPath(fromObject, ['state']);
    if (fromState != null) {
        setValueByPath(toObject, ['state'], tTuningJobStatus(apiClient, fromState));
    }
    const fromCreateTime = getValueByPath(fromObject, ['createTime']);
    if (fromCreateTime != null) {
        setValueByPath(toObject, ['createTime'], fromCreateTime);
    }
    const fromStartTime = getValueByPath(fromObject, [
        'tuningTask',
        'startTime',
    ]);
    if (fromStartTime != null) {
        setValueByPath(toObject, ['startTime'], fromStartTime);
    }
    const fromEndTime = getValueByPath(fromObject, [
        'tuningTask',
        'completeTime',
    ]);
    if (fromEndTime != null) {
        setValueByPath(toObject, ['endTime'], fromEndTime);
    }
    const fromUpdateTime = getValueByPath(fromObject, ['updateTime']);
    if (fromUpdateTime != null) {
        setValueByPath(toObject, ['updateTime'], fromUpdateTime);
    }
    const fromDescription = getValueByPath(fromObject, ['description']);
    if (fromDescription != null) {
        setValueByPath(toObject, ['description'], fromDescription);
    }
    const fromBaseModel = getValueByPath(fromObject, ['baseModel']);
    if (fromBaseModel != null) {
        setValueByPath(toObject, ['baseModel'], fromBaseModel);
    }
    const fromTunedModel = getValueByPath(fromObject, ['_self']);
    if (fromTunedModel != null) {
        setValueByPath(toObject, ['tunedModel'], tunedModelFromMldev(apiClient, fromTunedModel));
    }
    const fromDistillationSpec = getValueByPath(fromObject, [
        'distillationSpec',
    ]);
    if (fromDistillationSpec != null) {
        setValueByPath(toObject, ['distillationSpec'], fromDistillationSpec);
    }
    const fromExperiment = getValueByPath(fromObject, ['experiment']);
    if (fromExperiment != null) {
        setValueByPath(toObject, ['experiment'], fromExperiment);
    }
    const fromLabels = getValueByPath(fromObject, ['labels']);
    if (fromLabels != null) {
        setValueByPath(toObject, ['labels'], fromLabels);
    }
    const fromPipelineJob = getValueByPath(fromObject, ['pipelineJob']);
    if (fromPipelineJob != null) {
        setValueByPath(toObject, ['pipelineJob'], fromPipelineJob);
    }
    const fromTunedModelDisplayName = getValueByPath(fromObject, [
        'tunedModelDisplayName',
    ]);
    if (fromTunedModelDisplayName != null) {
        setValueByPath(toObject, ['tunedModelDisplayName'], fromTunedModelDisplayName);
    }
    return toObject;
}
function listTuningJobsResponseFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken',
    ]);
    if (fromNextPageToken != null) {
        setValueByPath(toObject, ['nextPageToken'], fromNextPageToken);
    }
    const fromTuningJobs = getValueByPath(fromObject, ['tunedModels']);
    if (fromTuningJobs != null) {
        let transformedList = fromTuningJobs;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return tuningJobFromMldev(apiClient, item);
            });
        }
        setValueByPath(toObject, ['tuningJobs'], transformedList);
    }
    return toObject;
}
function operationFromMldev(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromMetadata = getValueByPath(fromObject, ['metadata']);
    if (fromMetadata != null) {
        setValueByPath(toObject, ['metadata'], fromMetadata);
    }
    const fromDone = getValueByPath(fromObject, ['done']);
    if (fromDone != null) {
        setValueByPath(toObject, ['done'], fromDone);
    }
    const fromError = getValueByPath(fromObject, ['error']);
    if (fromError != null) {
        setValueByPath(toObject, ['error'], fromError);
    }
    return toObject;
}
function tunedModelFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromModel = getValueByPath(fromObject, ['model']);
    if (fromModel != null) {
        setValueByPath(toObject, ['model'], fromModel);
    }
    const fromEndpoint = getValueByPath(fromObject, ['endpoint']);
    if (fromEndpoint != null) {
        setValueByPath(toObject, ['endpoint'], fromEndpoint);
    }
    return toObject;
}
function tuningJobFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromName = getValueByPath(fromObject, ['name']);
    if (fromName != null) {
        setValueByPath(toObject, ['name'], fromName);
    }
    const fromState = getValueByPath(fromObject, ['state']);
    if (fromState != null) {
        setValueByPath(toObject, ['state'], tTuningJobStatus(apiClient, fromState));
    }
    const fromCreateTime = getValueByPath(fromObject, ['createTime']);
    if (fromCreateTime != null) {
        setValueByPath(toObject, ['createTime'], fromCreateTime);
    }
    const fromStartTime = getValueByPath(fromObject, ['startTime']);
    if (fromStartTime != null) {
        setValueByPath(toObject, ['startTime'], fromStartTime);
    }
    const fromEndTime = getValueByPath(fromObject, ['endTime']);
    if (fromEndTime != null) {
        setValueByPath(toObject, ['endTime'], fromEndTime);
    }
    const fromUpdateTime = getValueByPath(fromObject, ['updateTime']);
    if (fromUpdateTime != null) {
        setValueByPath(toObject, ['updateTime'], fromUpdateTime);
    }
    const fromError = getValueByPath(fromObject, ['error']);
    if (fromError != null) {
        setValueByPath(toObject, ['error'], fromError);
    }
    const fromDescription = getValueByPath(fromObject, ['description']);
    if (fromDescription != null) {
        setValueByPath(toObject, ['description'], fromDescription);
    }
    const fromBaseModel = getValueByPath(fromObject, ['baseModel']);
    if (fromBaseModel != null) {
        setValueByPath(toObject, ['baseModel'], fromBaseModel);
    }
    const fromTunedModel = getValueByPath(fromObject, ['tunedModel']);
    if (fromTunedModel != null) {
        setValueByPath(toObject, ['tunedModel'], tunedModelFromVertex(apiClient, fromTunedModel));
    }
    const fromSupervisedTuningSpec = getValueByPath(fromObject, [
        'supervisedTuningSpec',
    ]);
    if (fromSupervisedTuningSpec != null) {
        setValueByPath(toObject, ['supervisedTuningSpec'], fromSupervisedTuningSpec);
    }
    const fromTuningDataStats = getValueByPath(fromObject, [
        'tuningDataStats',
    ]);
    if (fromTuningDataStats != null) {
        setValueByPath(toObject, ['tuningDataStats'], fromTuningDataStats);
    }
    const fromEncryptionSpec = getValueByPath(fromObject, [
        'encryptionSpec',
    ]);
    if (fromEncryptionSpec != null) {
        setValueByPath(toObject, ['encryptionSpec'], fromEncryptionSpec);
    }
    const fromPartnerModelTuningSpec = getValueByPath(fromObject, [
        'partnerModelTuningSpec',
    ]);
    if (fromPartnerModelTuningSpec != null) {
        setValueByPath(toObject, ['partnerModelTuningSpec'], fromPartnerModelTuningSpec);
    }
    const fromDistillationSpec = getValueByPath(fromObject, [
        'distillationSpec',
    ]);
    if (fromDistillationSpec != null) {
        setValueByPath(toObject, ['distillationSpec'], fromDistillationSpec);
    }
    const fromExperiment = getValueByPath(fromObject, ['experiment']);
    if (fromExperiment != null) {
        setValueByPath(toObject, ['experiment'], fromExperiment);
    }
    const fromLabels = getValueByPath(fromObject, ['labels']);
    if (fromLabels != null) {
        setValueByPath(toObject, ['labels'], fromLabels);
    }
    const fromPipelineJob = getValueByPath(fromObject, ['pipelineJob']);
    if (fromPipelineJob != null) {
        setValueByPath(toObject, ['pipelineJob'], fromPipelineJob);
    }
    const fromTunedModelDisplayName = getValueByPath(fromObject, [
        'tunedModelDisplayName',
    ]);
    if (fromTunedModelDisplayName != null) {
        setValueByPath(toObject, ['tunedModelDisplayName'], fromTunedModelDisplayName);
    }
    return toObject;
}
function listTuningJobsResponseFromVertex(apiClient, fromObject) {
    const toObject = {};
    const fromNextPageToken = getValueByPath(fromObject, [
        'nextPageToken',
    ]);
    if (fromNextPageToken != null) {
        setValueByPath(toObject, ['nextPageToken'], fromNextPageToken);
    }
    const fromTuningJobs = getValueByPath(fromObject, ['tuningJobs']);
    if (fromTuningJobs != null) {
        let transformedList = fromTuningJobs;
        if (Array.isArray(transformedList)) {
            transformedList = transformedList.map((item) => {
                return tuningJobFromVertex(apiClient, item);
            });
        }
        setValueByPath(toObject, ['tuningJobs'], transformedList);
    }
    return toObject;
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Tunings extends BaseModule {
    constructor(apiClient) {
        super();
        this.apiClient = apiClient;
        /**
         * Gets a TuningJob.
         *
         * @param name - The resource name of the tuning job.
         * @return - A TuningJob object.
         *
         * @experimental - The SDK's tuning implementation is experimental, and may
         * change in future versions.
         */
        this.get = async (params) => {
            return await this.getInternal(params);
        };
        /**
         * Lists tuning jobs.
         *
         * @param config - The configuration for the list request.
         * @return - A list of tuning jobs.
         *
         * @experimental - The SDK's tuning implementation is experimental, and may
         * change in future versions.
         */
        this.list = async (params = {}) => {
            return new Pager(PagedItem.PAGED_ITEM_TUNING_JOBS, (x) => this.listInternal(x), await this.listInternal(params), params);
        };
        /**
         * Creates a supervised fine-tuning job.
         *
         * @param params - The parameters for the tuning job.
         * @return - A TuningJob operation.
         *
         * @experimental - The SDK's tuning implementation is experimental, and may
         * change in future versions.
         */
        this.tune = async (params) => {
            if (this.apiClient.isVertexAI()) {
                return await this.tuneInternal(params);
            }
            else {
                const operation = await this.tuneMldevInternal(params);
                let tunedModelName = '';
                if (operation['metadata'] !== undefined &&
                    operation['metadata']['tunedModel'] !== undefined) {
                    tunedModelName = operation['metadata']['tunedModel'];
                }
                else if (operation['name'] !== undefined &&
                    operation['name'].includes('/operations/')) {
                    tunedModelName = operation['name'].split('/operations/')[0];
                }
                const tuningJob = {
                    name: tunedModelName,
                    state: JobState.JOB_STATE_QUEUED,
                };
                return tuningJob;
            }
        };
    }
    async getInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = getTuningJobParametersToVertex(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = tuningJobFromVertex(this.apiClient, apiResponse);
                return resp;
            });
        }
        else {
            const body = getTuningJobParametersToMldev(this.apiClient, params);
            path = formatMap('{name}', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = tuningJobFromMldev(this.apiClient, apiResponse);
                return resp;
            });
        }
    }
    async listInternal(params) {
        var _a, _b, _c, _d;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = listTuningJobsParametersToVertex(this.apiClient, params);
            path = formatMap('tuningJobs', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = listTuningJobsResponseFromVertex(this.apiClient, apiResponse);
                const typedResp = new ListTuningJobsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
        else {
            const body = listTuningJobsParametersToMldev(this.apiClient, params);
            path = formatMap('tunedModels', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'GET',
                httpOptions: (_c = params.config) === null || _c === void 0 ? void 0 : _c.httpOptions,
                abortSignal: (_d = params.config) === null || _d === void 0 ? void 0 : _d.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = listTuningJobsResponseFromMldev(this.apiClient, apiResponse);
                const typedResp = new ListTuningJobsResponse();
                Object.assign(typedResp, resp);
                return typedResp;
            });
        }
    }
    async tuneInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            const body = createTuningJobParametersToVertex(this.apiClient, params);
            path = formatMap('tuningJobs', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = tuningJobFromVertex(this.apiClient, apiResponse);
                return resp;
            });
        }
        else {
            throw new Error('This method is only supported by the Vertex AI.');
        }
    }
    async tuneMldevInternal(params) {
        var _a, _b;
        let response;
        let path = '';
        let queryParams = {};
        if (this.apiClient.isVertexAI()) {
            throw new Error('This method is only supported by the Gemini Developer API.');
        }
        else {
            const body = createTuningJobParametersToMldev(this.apiClient, params);
            path = formatMap('tunedModels', body['_url']);
            queryParams = body['_query'];
            delete body['config'];
            delete body['_url'];
            delete body['_query'];
            response = this.apiClient
                .request({
                path: path,
                queryParams: queryParams,
                body: JSON.stringify(body),
                httpMethod: 'POST',
                httpOptions: (_a = params.config) === null || _a === void 0 ? void 0 : _a.httpOptions,
                abortSignal: (_b = params.config) === null || _b === void 0 ? void 0 : _b.abortSignal,
            })
                .then((httpResponse) => {
                return httpResponse.json();
            });
            return response.then((apiResponse) => {
                const resp = operationFromMldev(this.apiClient, apiResponse);
                return resp;
            });
        }
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class BrowserDownloader {
    async download(_params, _apiClient) {
        throw new Error('Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.');
    }
}

const MAX_CHUNK_SIZE = 1024 * 1024 * 8; // bytes
const MAX_RETRY_COUNT = 3;
const INITIAL_RETRY_DELAY_MS = 1000;
const DELAY_MULTIPLIER = 2;
const X_GOOG_UPLOAD_STATUS_HEADER_FIELD = 'x-goog-upload-status';
async function uploadBlob(file, uploadUrl, apiClient) {
    var _a, _b, _c;
    let fileSize = 0;
    let offset = 0;
    let response = new HttpResponse(new Response());
    let uploadCommand = 'upload';
    fileSize = file.size;
    while (offset < fileSize) {
        const chunkSize = Math.min(MAX_CHUNK_SIZE, fileSize - offset);
        const chunk = file.slice(offset, offset + chunkSize);
        if (offset + chunkSize >= fileSize) {
            uploadCommand += ', finalize';
        }
        let retryCount = 0;
        let currentDelayMs = INITIAL_RETRY_DELAY_MS;
        while (retryCount < MAX_RETRY_COUNT) {
            response = await apiClient.request({
                path: '',
                body: chunk,
                httpMethod: 'POST',
                httpOptions: {
                    apiVersion: '',
                    baseUrl: uploadUrl,
                    headers: {
                        'X-Goog-Upload-Command': uploadCommand,
                        'X-Goog-Upload-Offset': String(offset),
                        'Content-Length': String(chunkSize),
                    },
                },
            });
            if ((_a = response === null || response === void 0 ? void 0 : response.headers) === null || _a === void 0 ? void 0 : _a[X_GOOG_UPLOAD_STATUS_HEADER_FIELD]) {
                break;
            }
            retryCount++;
            await sleep(currentDelayMs);
            currentDelayMs = currentDelayMs * DELAY_MULTIPLIER;
        }
        offset += chunkSize;
        // The `x-goog-upload-status` header field can be `active`, `final` and
        //`cancelled` in resposne.
        if (((_b = response === null || response === void 0 ? void 0 : response.headers) === null || _b === void 0 ? void 0 : _b[X_GOOG_UPLOAD_STATUS_HEADER_FIELD]) !== 'active') {
            break;
        }
        // TODO(b/401391430) Investigate why the upload status is not finalized
        // even though all content has been uploaded.
        if (fileSize <= offset) {
            throw new Error('All content has been uploaded, but the upload status is not finalized.');
        }
    }
    const responseJson = (await (response === null || response === void 0 ? void 0 : response.json()));
    if (((_c = response === null || response === void 0 ? void 0 : response.headers) === null || _c === void 0 ? void 0 : _c[X_GOOG_UPLOAD_STATUS_HEADER_FIELD]) !== 'final') {
        throw new Error('Failed to upload file: Upload status is not finalized.');
    }
    return responseJson['file'];
}
async function getBlobStat(file) {
    const fileStat = { size: file.size, type: file.type };
    return fileStat;
}
function sleep(ms) {
    return new Promise((resolvePromise) => setTimeout(resolvePromise, ms));
}

class BrowserUploader {
    async upload(file, uploadUrl, apiClient) {
        if (typeof file === 'string') {
            throw new Error('File path is not supported in browser uploader.');
        }
        return await uploadBlob(file, uploadUrl, apiClient);
    }
    async stat(file) {
        if (typeof file === 'string') {
            throw new Error('File path is not supported in browser uploader.');
        }
        else {
            return await getBlobStat(file);
        }
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO((b/401271082): re-enable lint once BrowserWebSocketFactory is
// implemented.
/*  eslint-disable @typescript-eslint/no-unused-vars */
class BrowserWebSocketFactory {
    create(url, headers, callbacks) {
        return new BrowserWebSocket(url, headers, callbacks);
    }
}
class BrowserWebSocket {
    constructor(url, headers, callbacks) {
        this.url = url;
        this.headers = headers;
        this.callbacks = callbacks;
    }
    connect() {
        this.ws = new WebSocket(this.url);
        this.ws.onopen = this.callbacks.onopen;
        this.ws.onerror = this.callbacks.onerror;
        this.ws.onclose = this.callbacks.onclose;
        this.ws.onmessage = this.callbacks.onmessage;
    }
    send(message) {
        if (this.ws === undefined) {
            throw new Error('WebSocket is not connected');
        }
        this.ws.send(message);
    }
    close() {
        if (this.ws === undefined) {
            throw new Error('WebSocket is not connected');
        }
        this.ws.close();
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const GOOGLE_API_KEY_HEADER = 'x-goog-api-key';
// TODO(b/395122533): We need a secure client side authentication mechanism.
class WebAuth {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async addAuthHeaders(headers) {
        if (headers.get(GOOGLE_API_KEY_HEADER) !== null) {
            return;
        }
        headers.append(GOOGLE_API_KEY_HEADER, this.apiKey);
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const LANGUAGE_LABEL_PREFIX = 'gl-node/';
/**
 * The Google GenAI SDK.
 *
 * @remarks
 * Provides access to the GenAI features through either the {@link
 * https://cloud.google.com/vertex-ai/docs/reference/rest | Gemini API} or
 * the {@link https://cloud.google.com/vertex-ai/docs/reference/rest | Vertex AI
 * API}.
 *
 * The {@link GoogleGenAIOptions.vertexai} value determines which of the API
 * services to use.
 *
 * When using the Gemini API, a {@link GoogleGenAIOptions.apiKey} must also be
 * set. When using Vertex AI, currently only {@link GoogleGenAIOptions.apiKey}
 * is supported via Express mode. {@link GoogleGenAIOptions.project} and {@link
 * GoogleGenAIOptions.location} should not be set.
 *
 * @example
 * Initializing the SDK for using the Gemini API:
 * ```ts
 * import {GoogleGenAI} from '@google/genai';
 * const ai = new GoogleGenAI({apiKey: 'GEMINI_API_KEY'});
 * ```
 *
 * @example
 * Initializing the SDK for using the Vertex AI API:
 * ```ts
 * import {GoogleGenAI} from '@google/genai';
 * const ai = new GoogleGenAI({
 *   vertexai: true,
 *   project: 'PROJECT_ID',
 *   location: 'PROJECT_LOCATION'
 * });
 * ```
 *
 */
class GoogleGenAI {
    constructor(options) {
        var _a;
        if (options.apiKey == null) {
            throw new Error('An API Key must be set when running in a browser');
        }
        // Web client only supports API key mode for Vertex AI.
        if (options.project || options.location) {
            throw new Error('Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.');
        }
        this.vertexai = (_a = options.vertexai) !== null && _a !== void 0 ? _a : false;
        this.apiKey = options.apiKey;
        const baseUrl = getBaseUrl(options, 
        /*vertexBaseUrlFromEnv*/ undefined, 
        /*geminiBaseUrlFromEnv*/ undefined);
        if (baseUrl) {
            if (options.httpOptions) {
                options.httpOptions.baseUrl = baseUrl;
            }
            else {
                options.httpOptions = { baseUrl: baseUrl };
            }
        }
        this.apiVersion = options.apiVersion;
        const auth = new WebAuth(this.apiKey);
        this.apiClient = new ApiClient({
            auth: auth,
            apiVersion: this.apiVersion,
            apiKey: this.apiKey,
            vertexai: this.vertexai,
            httpOptions: options.httpOptions,
            userAgentExtra: LANGUAGE_LABEL_PREFIX + 'web',
            uploader: new BrowserUploader(),
            downloader: new BrowserDownloader(),
        });
        this.models = new Models(this.apiClient);
        this.live = new Live(this.apiClient, auth, new BrowserWebSocketFactory());
        this.chats = new Chats(this.models, this.apiClient);
        this.caches = new Caches(this.apiClient);
        this.files = new Files(this.apiClient);
        this.operations = new Operations(this.apiClient);
        this.tunings = new Tunings(this.apiClient);
    }
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper$1(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray$1(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray$1(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0; } }
function _arrayLikeToArray$1(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _asyncIterator(r) { var n, t, o, e = 2; for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) { if (t && null != (n = r[t])) return n.call(r); if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r)); t = "@@asyncIterator", o = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(r) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var n = r.done; return Promise.resolve(r.value).then(function (r) { return { value: r, done: n }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(r) { this.s = r, this.n = r.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, return: function _return(r) { var n = this.s.return; return void 0 === n ? Promise.resolve({ value: r, done: !0 }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); }, throw: function _throw(r) { var n = this.s.return; return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(r); }
var FunctionCall = /*#__PURE__*/function () {
  function FunctionCall(call, requestType, generateParameters) {
    _classCallCheck$1(this, FunctionCall);
    this.call = call;
    this.requestType = requestType;
    this.generateParameters = generateParameters;
    this.status = 'PENDING';
    this.thread = null; // thread to run function
  }
  /**
   * Get function call name.
   * @returns {string} - function call name
   */
  return _createClass$1(FunctionCall, [{
    key: "name",
    get: function get() {
      return this.call.name;
    }

    /**
     * Get function call arguments.
     * @returns {Array} - function call arguments
     */
  }, {
    key: "args",
    get: function get() {
      return this.call.args;
    }

    /**
     * Whether function call is finished.
     * @returns {boolean} - true if function call is finished, false otherwise
     */
  }, {
    key: "isFinished",
    value: function isFinished() {
      return this.status === 'COMPLETED' || this.status === 'FAILED';
    }
  }]);
}();
var HarmCategory = {
  HARM_CATEGORY_UNSPECIFIED: 'HARM_CATEGORY_UNSPECIFIED',
  HARM_CATEGORY_HATE_SPEECH: 'HARM_CATEGORY_HATE_SPEECH',
  HARM_CATEGORY_SEXUALLY_EXPLICIT: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
  HARM_CATEGORY_HARASSMENT: 'HARM_CATEGORY_HARASSMENT',
  HARM_CATEGORY_DANGEROUS_CONTENT: 'HARM_CATEGORY_DANGEROUS_CONTENT'
};
var HarmBlockThreshold = {
  HARM_BLOCK_THRESHOLD_UNSPECIFIED: 'HARM_BLOCK_THRESHOLD_UNSPECIFIED',
  BLOCK_LOW_AND_ABOVE: 'BLOCK_LOW_AND_ABOVE',
  BLOCK_MEDIUM_AND_ABOVE: 'BLOCK_MEDIUM_AND_ABOVE',
  BLOCK_ONLY_HIGH: 'BLOCK_ONLY_HIGH',
  BLOCK_NONE: 'BLOCK_NONE',
  OFF: 'OFF'
};
var EmbeddingTaskType = {
  TASK_TYPE_UNSPECIFIED: 'TASK_TYPE_UNSPECIFIED',
  SEMANTIC_SIMILARITY: 'SEMANTIC_SIMILARITY',
  CLASSIFICATION: 'CLASSIFICATION',
  CLUSTERING: 'CLUSTERING',
  RETRIEVAL_DOCUMENT: 'RETRIEVAL_DOCUMENT',
  RETRIEVAL_QUERY: 'RETRIEVAL_QUERY',
  QUESTION_ANSWERING: 'QUESTION_ANSWERING',
  FACT_VERIFICATION: 'FACT_VERIFICATION',
  CODE_RETRIEVAL_QUERY: 'CODE_RETRIEVAL_QUERY'
};

/**
 * Get text of the first candidate from response.
 * @param {object} responses - response from generative ai
 * @param {number} candidateIndex - index of the candidate
 * @return {?string} response text
 */
var getTextFromResponse = function getTextFromResponse(responses) {
  var candidateIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!responses) {
    return '';
  }
  if (!Array.isArray(responses)) {
    responses = [responses];
  }
  var contentText = '';
  responses.forEach(function (aResponse) {
    var _aResponse$name;
    if (typeof aResponse === 'string') {
      return aResponse;
    }
    if ((_aResponse$name = aResponse.name) !== null && _aResponse$name !== void 0 && _aResponse$name.includes('Error')) {
      contentText += aResponse.message || aResponse.name;
      return contentText;
    }
    if (aResponse.promptFeedback) {
      if (aResponse.promptFeedback.blockReason === 'SAFETY') {
        var safetyRatings = aResponse.promptFeedback.safetyRatings;
        var blockedMessages = '';
        safetyRatings.forEach(function (safetyRating) {
          if (safetyRating.blocked) {
            blockedMessages += "\nBlocked: ".concat(safetyRating.category, " is (").concat(safetyRating.probability, ")");
          }
        });
        contentText += blockedMessages;
        return;
      }
      contentText += aResponse.promptFeedback.blockReason;
      return;
    }
    if (!aResponse.candidates || !Array.isArray(aResponse.candidates)) {
      // sometimes response is empty
      return;
    }
    if (aResponse.candidates.length === 0) {
      // sometimes candidates are empty
      return;
    }
    if (aResponse.candidates.length <= candidateIndex) {
      return;
    }
    var candidate = aResponse.candidates[candidateIndex];
    if (!candidate || !candidate.content || !candidate.content.parts) {
      // sometimes content is empty
      return;
    }
    var _iterator3 = _createForOfIteratorHelper$1(candidate.content.parts),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var part = _step3.value;
        if (part.text) {
          contentText += part.text;
        }
        if (part.executableCode) {
          contentText += "\n```python\n".concat(part.executableCode.code, "\n```\n");
        }
        if (part.codeExecutionResult) {
          contentText += "\n```\n".concat(part.codeExecutionResult.output, "\n```\n");
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  return contentText;
};
var GEMINI_ADAPTERS = {};
var GeminiAdapter = /*#__PURE__*/function () {
  function GeminiAdapter(target) {
    _classCallCheck$1(this, GeminiAdapter);
    this.target = target;
    GeminiAdapter.ADAPTERS[target.id] = this;
    this.sdk = null;
    this.modelCode = Object.assign({}, GeminiAdapter.MODEL_CODE);
    this.models = {};
    /**
     * safety settings
     * @type {Array.<{category__/: string, blockThreshold: string}>}
     */
    this.safetySettings = [];
    /**
     * generation config
     * @type {import('@google/genai').GenerateContentConfig}
     */
    this.generationConfig = {};
    this.chatSession = null;
    this.lastResponse = null;
    this.lastPartialResponse = null;
    this.functionRegistry = {};
    this.functionCallTool = null;
    this.functionIndex = 0; // index for function names
    this.functionArgPrefix = 'arg_';
    this.functionNamePrefix = 'func_';
    this.functionCallingMode = GeminiAdapter.FUNCTION_CALLING_AUTO; // default mode
  }

  /**
   * Get SDK. Initialize if not exists.
   * @returns {GoogleGenAI} - SDK
   */
  return _createClass$1(GeminiAdapter, [{
    key: "getSDK",
    value: function getSDK() {
      if (!this.sdk) {
        this.sdk = new GoogleGenAI({
          apiKey: GeminiAdapter.getApiKey(),
          baseUrl: GeminiAdapter.baseUrl
        });
      }
      return this.sdk;
    }

    /**
     * Get models list.
     * @returns {Promise<Array.<Model>>} - a Promise that resolves when the models are loaded
     */
  }, {
    key: "getModels",
    value: (function () {
      var _getModels = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var pager, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, aModel, _t;
        return _regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.models && this.models.length)) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return", this.models);
            case 1:
              _context.next = 2;
              return this.getSDK().models.list();
            case 2:
              pager = _context.sent;
              this.models = [];
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context.prev = 3;
              _iterator = _asyncIterator(pager);
            case 4:
              _context.next = 5;
              return _iterator.next();
            case 5:
              if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                _context.next = 7;
                break;
              }
              aModel = _step.value;
              this.models.push(aModel);
            case 6:
              _iteratorAbruptCompletion = false;
              _context.next = 4;
              break;
            case 7:
              _context.next = 9;
              break;
            case 8:
              _context.prev = 8;
              _t = _context["catch"](3);
              _didIteratorError = true;
              _iteratorError = _t;
            case 9:
              _context.prev = 9;
              _context.prev = 10;
              if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                _context.next = 11;
                break;
              }
              _context.next = 11;
              return _iterator.return();
            case 11:
              _context.prev = 11;
              if (!_didIteratorError) {
                _context.next = 12;
                break;
              }
              throw _iteratorError;
            case 12:
              return _context.finish(11);
            case 13:
              return _context.finish(9);
            case 14:
              return _context.abrupt("return", this.models);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 8, 9, 14], [10,, 11, 13]]);
      }));
      function getModels() {
        return _getModels.apply(this, arguments);
      }
      return getModels;
    }()
    /**
     * Get list of generative model IDs.
     * @returns {Promise<Array.<string>>} - a Promise that resolves when the model IDs are loaded
     */
    )
  }, {
    key: "getGenerativeModelList",
    value: function getGenerativeModelList() {
      return this.getModels().then(function (models) {
        return models.filter(function (model) {
          return model.supportedActions.includes('generateContent');
        }).map(function (model) {
          return model.name;
        });
      });
    }

    /**
     * Get generative model ID by index.
     * @param {number} modelIndex - index of the model
     * @returns {Promise<string>} - a Promise that resolves when the model ID is loaded
     */
  }, {
    key: "getGenerativeModelID",
    value: function getGenerativeModelID(modelIndex) {
      return this.getGenerativeModelList().then(function (modelList) {
        return modelList[modelIndex];
      });
    }

    /**
     * Get the number of generative models.
     * @returns {Promise<number>} - a Promise that resolves when the number of models is loaded
     */
  }, {
    key: "getMaxGenerativeModelNumber",
    value: function getMaxGenerativeModelNumber() {
      return this.getGenerativeModelList().then(function (modelList) {
        return modelList.length;
      });
    }

    /**
     * Get list of embedding model IDs.
     * @returns {Promise<Array.<string>>} - a Promise that resolves when the model IDs are loaded
     */
  }, {
    key: "getEmbeddingModelList",
    value: function getEmbeddingModelList() {
      return this.getModels().then(function (models) {
        return models.filter(function (model) {
          return model.supportedActions.includes('embedContent');
        }).map(function (model) {
          return model.name;
        });
      });
    }

    /**
     * Get embedding model ID by index.
     * @param {number} modelIndex - index of the model
     * @returns {Promise<string>} - a Promise that resolves when the model ID is loaded
     */
  }, {
    key: "getEmbeddingModelID",
    value: function getEmbeddingModelID(modelIndex) {
      return this.getEmbeddingModelList().then(function (modelList) {
        return modelList[modelIndex];
      });
    }

    /**
     * Get the number of embedding models.
     * @returns {Promise<number>} - a Promise that resolves when the number of models is loaded
     */
  }, {
    key: "getMaxEmbeddingModelNumber",
    value: function getMaxEmbeddingModelNumber() {
      return this.getEmbeddingModelList().then(function (modelList) {
        return modelList.length;
      });
    }

    /**
     * Count tokens by model.
     * @param {Array.<string | object>} contentParts - content to AI
     * @param {string} requestType - type of request {'generate' | 'chat'}
     * @returns {Promise<number>} - a Promise that resolves when the tokens are counted
     */
  }, {
    key: "countTokensAs",
    value: (function () {
      var _countTokensAs = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee2(contentParts, requestType) {
        var models, result, geminiContentParts, history, contents;
        return _regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              models = this.getSDK().models;
              geminiContentParts = this.convertContentParts(contentParts);
              if (!(requestType === 'generate')) {
                _context2.next = 2;
                break;
              }
              _context2.next = 1;
              return models.countTokens({
                model: this.modelCode.generative,
                contents: createUserContent(geminiContentParts),
                config: {
                  systemInstruction: this.generationConfig.systemInstruction,
                  tools: this.generationConfig.tools
                }
              });
            case 1:
              result = _context2.sent;
              _context2.next = 4;
              break;
            case 2:
              if (!(requestType === 'chat')) {
                _context2.next = 4;
                break;
              }
              history = this.getChatHistory();
              contents = [].concat(_toConsumableArray(history), [createUserContent(geminiContentParts)]);
              _context2.next = 3;
              return models.countTokens({
                model: this.modelCode.generative,
                contents: contents,
                config: {
                  systemInstruction: this.generationConfig.systemInstruction,
                  tools: this.generationConfig.tools
                }
              });
            case 3:
              result = _context2.sent;
            case 4:
              return _context2.abrupt("return", result.totalTokens);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function countTokensAs(_x, _x2) {
        return _countTokensAs.apply(this, arguments);
      }
      return countTokensAs;
    }()
    /**
     * Get chat history.
     * @returns {Content[]} - history of chat
     */
    )
  }, {
    key: "getChatHistory",
    value: function getChatHistory() {
      if (!this.chatSession) {
        return [];
      }
      return this.chatSession.getHistory();
    }

    /**
     * Get last response object from AI.
     * @returns {GenerateContentResponse} - last response
     */
  }, {
    key: "getLastResponse",
    value: function getLastResponse() {
      return this.lastResponse;
    }

    /**
     * Set last response from AI.
     * @param {GenerateContentResponse|GenericContentResponse[]} response - last response
     * @param {object} prompt - the requested prompt of the response
     * @returns {void}
     */
  }, {
    key: "setLastResponse",
    value: function setLastResponse(response) {
      this.lastResponse = response;
    }

    /**
     * Set last partial response from AI.
     * @param {EnhancedGenerateContentResponse} response - last partial response
     * @returns {void}
     */
  }, {
    key: "setLastPartialResponse",
    value: function setLastPartialResponse(response) {
      this.lastPartialResponse = response;
    }

    /**
     * Get last partial response from AI.
     * @returns {EnhancedGenerateContentResponse} - last partial response
     */
  }, {
    key: "getLastPartialResponse",
    value: function getLastPartialResponse() {
      return this.lastPartialResponse;
    }

    /**
     * Update function declarations in generation config according to registered functions.
     * @returns {void}
     */
  }, {
    key: "updateFunctionCallTool",
    value: function updateFunctionCallTool() {
      var declarations = Object.values(this.functionRegistry).map(function (func) {
        return func.declaration;
      });
      if (!this.generationConfig.tools) {
        this.generationConfig.tools = [];
      }
      if (this.functionCallTool) {
        this.functionCallTool.functionDeclarations = declarations;
      } else {
        var functionCallTool = {
          functionDeclarations: declarations
        };
        this.generationConfig.tools.push(functionCallTool);
        this.functionCallTool = functionCallTool;
      }
      // Update tool config to include function calling mode
      this.updateToolConfig();
    }

    /**
     * Set function calling mode for AI generation.
     * @param {string} mode - function calling mode ('NONE', 'AUTO', 'ANY')
     * @returns {void}
     */
  }, {
    key: "setFunctionCallingMode",
    value: function setFunctionCallingMode(mode) {
      this.functionCallingMode = mode;
      // Update toolConfig in generationConfig when function calling mode is set
      this.updateToolConfig();
    }

    /**
     * Update tool config in generation config to include function calling mode.
     * @returns {void}
     */
  }, {
    key: "updateToolConfig",
    value: function updateToolConfig() {
      if (!this.generationConfig.toolConfig) {
        this.generationConfig.toolConfig = {};
      }
      if (!this.generationConfig.toolConfig.functionCallingConfig) {
        this.generationConfig.toolConfig.functionCallingConfig = {};
      }
      this.generationConfig.toolConfig.functionCallingConfig.mode = this.functionCallingMode;
    }

    /**
     * Get function specification by procedure code.
     * @param {string} procedureCode - code of the procedure to get specification for
     * @returns {object|null} - function specification or null if not found
     */
  }, {
    key: "getFunctionSpec",
    value: function getFunctionSpec(procedureCode) {
      return Object.values(this.functionRegistry).find(function (func) {
        return func.procedureCode === procedureCode;
      });
    }

    /**
     * Register a function for the generation.
     * @param {string} procedureCode - code of the procedure to register
     * @param {string} functionDescription - description of the function
     * @param {Array.<{type: string, description: string, code: string}>} procedureArguments
     *  - arguments of the procedure
     * @returns {void}
     */
  }, {
    key: "registerFunction",
    value: function registerFunction(procedureCode, functionDescription, procedureArguments) {
      var _this = this;
      var functionName;
      var existingSpec = this.getFunctionSpec(procedureCode);
      if (existingSpec) {
        // If function already exists, update it
        functionName = existingSpec.declaration.name;
      } else {
        this.functionIndex = this.functionIndex + 1;
        functionName = "".concat(this.functionNamePrefix).concat(this.functionIndex);
      }
      var functionDeclaration = {
        name: functionName,
        description: functionDescription
      };
      var argumentDict = {};
      if (procedureArguments && procedureArguments.length > 0) {
        var parameters = {};
        procedureArguments.forEach(function (argSpec, index) {
          var paramName = "".concat(_this.functionArgPrefix).concat(index);
          parameters[paramName] = {
            type: argSpec.type,
            description: argSpec.description
          };
          argumentDict[paramName] = argSpec.code;
        });
        functionDeclaration.parameters = {
          type: 'object',
          properties: parameters
        };
      }
      this.functionRegistry[functionName] = {
        procedureCode: procedureCode,
        argumentDict: argumentDict,
        declaration: functionDeclaration
      };
      this.updateFunctionCallTool();
    }

    /**
     * Erase a function from registered functions.
     * @param {string} procedureCode - code of the procedure to erase
     * @returns {void}
     */
  }, {
    key: "unregisterFunction",
    value: function unregisterFunction(procedureCode) {
      var functionSpec = this.getFunctionSpec(procedureCode);
      if (functionSpec) {
        delete this.functionRegistry[functionSpec.declaration.name];
        this.updateFunctionCallTool();
      }
    }

    /**
     * Unregister all functions.
     * This will clear all registered functions and update the function call tool.
     * @returns {void}
     */
  }, {
    key: "clearRegisteredFunctions",
    value: function clearRegisteredFunctions() {
      var _this2 = this;
      // Clear all registered functions
      Object.keys(this.functionRegistry).forEach(function (key) {
        delete _this2.functionRegistry[key];
      });
      this.functionIndex = 0; // Reset function index
      this.updateFunctionCallTool();
    }

    /**
     * Return function result to AI.
     * @param {object} functionCall - function call to return result for
     * @returns {Promise<[GenerateContentResponse, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
  }, {
    key: "returnFunctionResult",
    value: function returnFunctionResult(functionCall) {
      var functionResponseContent = createUserContent([{
        functionResponse: {
          name: functionCall.name,
          response: {
            result: functionCall.result
          }
        }
      }]);
      if (functionCall.requestType === GeminiAdapter.REQUEST_TYPE.GENERATE) {
        var functionRequestContent = createModelContent([{
          functionCall: {
            name: functionCall.name,
            args: functionCall.args
          }
        }]);
        var contents = [functionCall.generateParameters.contents, functionRequestContent, functionResponseContent];
        var genParam = _objectSpread(_objectSpread({}, functionCall.generateParameters), {}, {
          contents: contents
        });
        return this.generateForContent(genParam);
      }
      if (functionCall.requestType === GeminiAdapter.REQUEST_TYPE.CHAT) {
        var chatParam = {
          config: _objectSpread({}, this.generationConfig),
          message: functionResponseContent
        };
        var promise = this.chatSession.sendMessage(chatParam);
        return this._handleResponse(promise, GeminiAdapter.REQUEST_TYPE.CHAT, chatParam);
      }
    }

    /**
     * Process function calls from the response.
     * @param {GenerateContentResponse} response - The response from the AI model.
     * @param {string} requestType - The type of the request ('generate' or 'chat').
     * @param {object} requestParam - The parameters used for the request.
     * @returns {Array<FunctionCall>} An array of FunctionCall objects.
     * @private
     */
  }, {
    key: "_createFunctionCalls",
    value: function _createFunctionCalls(response, requestType, requestParam) {
      var functionCalls = [];
      if (response.functionCalls) {
        response.functionCalls.forEach(function (call) {
          functionCalls.push(new FunctionCall(call, requestType, requestParam));
        });
      }
      return functionCalls;
    }

    /**
     * Handles the response from a non-streaming API call.
     * @param {Promise<GenerateContentResponse>} promise - The promise returned by the API call.
     * @param {string} requestType - The type of the request.
     * @param {object} requestParam - The parameters for the request.
     * @returns {Promise<[GenerateContentResponse, Array.<object>]>} A promise that resolves to the response and
     * function calls.
     * @private
     */
  }, {
    key: "_handleResponse",
    value: function _handleResponse(promise, requestType, requestParam) {
      var _this3 = this;
      return promise.then(function (response) {
        var functionCalls = _this3._createFunctionCalls(response, requestType, requestParam);
        _this3.setLastPartialResponse(null);
        _this3.setLastResponse(response);
        return [response, functionCalls];
      }).catch(function (error) {
        _this3.setLastResponse(error);
        return Promise.reject(error);
      });
    }

    /**
     * Handles the response from a streaming API call.
     * @param {Promise<AsyncGenerator<EnhancedGenerateContentResponse>>} streamingPromise
     *  - The promise for the streaming result.
     * @param {string} requestType - The type of the request.
     * @param {object} requestParam - The parameters for the request.
     * @param {function} partialResponseHandler - The handler for partial responses.
     * @returns {Promise<[Array<EnhancedGenerateContentResponse>, Array.<object>]>} A promise that resolves to the
     * responses and function calls.
     * @private
     */
  }, {
    key: "_handleStreamResponse",
    value: (function () {
      var _handleStreamResponse2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee3(streamingPromise, requestType, requestParam, partialResponseHandler) {
        var streamingResult, wholeResponses, functionCalls, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, partialResponse, _t2, _t3;
        return _regeneratorRuntime.wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 1;
              return streamingPromise;
            case 1:
              streamingResult = _context3.sent;
              wholeResponses = [];
              functionCalls = [];
              _iteratorAbruptCompletion2 = false;
              _didIteratorError2 = false;
              _context3.prev = 2;
              _iterator2 = _asyncIterator(streamingResult);
            case 3:
              _context3.next = 4;
              return _iterator2.next();
            case 4:
              if (!(_iteratorAbruptCompletion2 = !(_step2 = _context3.sent).done)) {
                _context3.next = 6;
                break;
              }
              partialResponse = _step2.value;
              this.setLastPartialResponse(partialResponse);
              if (partialResponseHandler) {
                partialResponseHandler(partialResponse);
              }
              wholeResponses.push(partialResponse);
              functionCalls = functionCalls.concat(this._createFunctionCalls(partialResponse, requestType, requestParam));
            case 5:
              _iteratorAbruptCompletion2 = false;
              _context3.next = 3;
              break;
            case 6:
              _context3.next = 8;
              break;
            case 7:
              _context3.prev = 7;
              _t2 = _context3["catch"](2);
              _didIteratorError2 = true;
              _iteratorError2 = _t2;
            case 8:
              _context3.prev = 8;
              _context3.prev = 9;
              if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                _context3.next = 10;
                break;
              }
              _context3.next = 10;
              return _iterator2.return();
            case 10:
              _context3.prev = 10;
              if (!_didIteratorError2) {
                _context3.next = 11;
                break;
              }
              throw _iteratorError2;
            case 11:
              return _context3.finish(10);
            case 12:
              return _context3.finish(8);
            case 13:
              this.setLastResponse(wholeResponses);
              return _context3.abrupt("return", [wholeResponses, functionCalls]);
            case 14:
              _context3.prev = 14;
              _t3 = _context3["catch"](0);
              this.setLastResponse(_t3);
              throw _t3;
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[0, 14], [2, 7, 8, 13], [9,, 10, 12]]);
      }));
      function _handleStreamResponse(_x3, _x4, _x5, _x6) {
        return _handleStreamResponse2.apply(this, arguments);
      }
      return _handleStreamResponse;
    }()
    /**
     * Convert content parts to Gemini AI format.
     * @param {Array.<string | object>} contentParts - content to convert
     * @returns {Array.<string | object>} - content to Gemini AI
     */
    )
  }, {
    key: "convertContentParts",
    value: function convertContentParts(contentParts) {
      return contentParts.map(function (p) {
        if (p.type === 'text') {
          return createPartFromText(p.data);
        } else if (p.type === 'dataURL') {
          var base64 = p.data.split(',')[1];
          var mimeType = p.data.substring(p.data.indexOf(':') + 1, p.data.indexOf(';'));
          return createPartFromBase64(base64, mimeType);
        }
        return p;
      });
    }

    /**
     * Generate content for AI.
     * @param {object} genParam - generation parameters
     * @returns {Promise<[GenerateContentResponse, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
  }, {
    key: "generateForContent",
    value: function generateForContent(genParam) {
      var models = this.getSDK().models;
      var promise = models.generateContent(genParam);
      return this._handleResponse(promise, GeminiAdapter.REQUEST_TYPE.GENERATE, genParam);
    }

    /**
     * Send generator type prompt to AI.
     * @param {Array.<string | object>} prompt - the original prompt to AI
     * @returns {Promise<[GenerateContentResponse, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
  }, {
    key: "requestGenerate",
    value: function requestGenerate(prompt) {
      var genParam = {
        model: this.modelCode.generative,
        contents: createUserContent(this.convertContentParts(prompt)),
        safetySettings: _objectSpread({}, this.safetySettings),
        config: _objectSpread({}, this.generationConfig)
      };
      return this.generateForContent(genParam);
    }

    /**
     * Send generator type prompt to AI and get a streaming response.
     * @param {Array.<string|object>} prompt - The prompt to send to the AI.
     * @param {function} partialResponseHandler - A function to handle partial responses.
     * @returns {Promise<[Array<EnhancedGenerateContentResponse>, Array.<object>]>} A promise that resolves to the full
     * response and any function calls.
     */
  }, {
    key: "requestGenerateStream",
    value: function requestGenerateStream(prompt, partialResponseHandler) {
      var models = this.getSDK().models;
      var config = _objectSpread(_objectSpread({}, this.generationConfig), {}, {
        candidateCount: 1
      });
      var genParam = {
        model: this.modelCode.generative,
        contents: createUserContent(this.convertContentParts(prompt)),
        safetySettings: _objectSpread({}, this.safetySettings),
        config: config
      };
      var streamingPromise = models.generateContentStream(genParam);
      return this._handleStreamResponse(streamingPromise, GeminiAdapter.REQUEST_TYPE.GENERATE, genParam, partialResponseHandler);
    }

    /**
     * Start chat.
     * @param {Array.<string>} history - history of chat
     * @returns {void}
     */
  }, {
    key: "startChat",
    value: function startChat(history) {
      this.chatSession = this.getSDK().chats.create({
        model: this.modelCode.generative,
        history: history,
        safetySettings: this.safetySettings,
        config: this.generationConfig
      });
    }

    /**
     * Send chat message to AI.
     * @param {string} prompt - message to AI
     * @returns {Promise<[GenerateContentResponse, Array.<object>]>} - a Promise that resolves
     *  to an array with response and function calls
     */
  }, {
    key: "requestChat",
    value: function requestChat(prompt) {
      if (!this.chatSession) {
        this.startChat([]);
      }
      var chatParam = {
        config: _objectSpread({}, this.generationConfig),
        message: createUserContent(this.convertContentParts(prompt))
      };
      var promise = this.chatSession.sendMessage(chatParam);
      return this._handleResponse(promise, GeminiAdapter.REQUEST_TYPE.CHAT, chatParam);
    }

    /**
     * Send chat message to AI and get a streaming response.
     * @param {string} prompt - message to AI
     * @param {function} partialResponseHandler - A function to handle partial responses.
     * @returns {Promise<[Array<EnhancedGenerateContentResponse>, Array.<object>]>} A promise that resolves to the full
     * response and any function calls.
     */
  }, {
    key: "requestChatStream",
    value: function requestChatStream(prompt, partialResponseHandler) {
      if (!this.chatSession) {
        this.startChat([]);
      }
      var config = _objectSpread(_objectSpread({}, this.generationConfig), {}, {
        candidateCount: 1
      });
      var chatParam = {
        config: config,
        message: createUserContent(this.convertContentParts(prompt))
      };
      var streamingPromise = this.chatSession.sendMessageStream(chatParam);
      return this._handleStreamResponse(streamingPromise, GeminiAdapter.REQUEST_TYPE.CHAT, chatParam, partialResponseHandler);
    }

    /**
     * Request embedding of content.
     * @param {Array.<string> | string} contentParts - content to AI
     * @param {string} taskType - type of task {EmbeddingTaskType}
     * @returns {Promise<Array<number>>} - a Promise that resolves when the embedding is received
     */
  }, {
    key: "requestEmbedding",
    value: (function () {
      var _requestEmbedding = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee4(contentParts, taskType) {
        var toEmbed, cache, key, result, embeddingValues;
        return _regeneratorRuntime.wrap(function (_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!contentParts || !contentParts.length)) {
                _context4.next = 1;
                break;
              }
              return _context4.abrupt("return", []);
            case 1:
              toEmbed = contentParts.reduce(function (acc, p) {
                if (p.type === 'text') {
                  return acc + p.data;
                }
                // ignore non-text content
                return acc;
              }, '');
              if (!this.embeddingCache) {
                this.embeddingCache = {};
              }
              if (!this.embeddingCache[taskType]) {
                this.embeddingCache[taskType] = {};
              }
              cache = this.embeddingCache[taskType];
              key = toEmbed;
              if (!cache[key]) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return", cache[key]);
            case 2:
              _context4.next = 3;
              return this.getSDK().models.embedContent({
                model: this.modelCode.embedding,
                contents: toEmbed,
                config: {
                  taskType: taskType
                }
              });
            case 3:
              result = _context4.sent;
              embeddingValues = result.embeddings[0].values;
              cache[key] = embeddingValues;
              return _context4.abrupt("return", embeddingValues);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function requestEmbedding(_x7, _x8) {
        return _requestEmbedding.apply(this, arguments);
      }
      return requestEmbedding;
    }()
    /**
     * Validate API key by testing access to models list (doesn't consume tokens).
     * @param {string} apiKey - API key to validate
     * @returns {Promise<object>} A promise that resolves to an object with validation results
     * @returns {boolean} Promise.valid - Whether the API key is valid
     * @returns {string} [Promise.error] - Error message if validation failed
     * @static
     */
    )
  }, {
    key: "setModel",
    value: (
    /**
     * Set and validate model code for specific model type.
     * @param {string} modelCode - model code to set
     * @param {string} modelType - type of model ('generative' | 'embedding')
     * @returns {Promise<string>} A promise that resolves to success message or error message
     */
    function () {
      var _setModel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee5(modelCode, modelType) {
        var models, requiredAction, availableModel, availableModels, _t4;
        return _regeneratorRuntime.wrap(function (_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(!modelCode || !modelCode.trim())) {
                _context5.next = 1;
                break;
              }
              return _context5.abrupt("return", 'Model code is empty');
            case 1:
              if (['generative', 'embedding'].includes(modelType)) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return", 'Invalid model type. Must be "generative" or "embedding"');
            case 2:
              if (GeminiAdapter.getApiKey()) {
                _context5.next = 3;
                break;
              }
              return _context5.abrupt("return", 'API key is not set');
            case 3:
              _context5.prev = 3;
              if (!modelCode.startsWith('models/')) {
                modelCode = "models/".concat(modelCode);
              }
              _context5.next = 4;
              return this.getModels();
            case 4:
              models = _context5.sent;
              requiredAction = modelType === 'generative' ? 'generateContent' : 'embedContent';
              availableModel = models.find(function (model) {
                return model.name === modelCode && model.supportedActions.includes(requiredAction);
              });
              if (availableModel) {
                _context5.next = 5;
                break;
              }
              this.modelCode[modelType] = 'model-not-found';
              availableModels = models.filter(function (model) {
                return model.supportedActions.includes(requiredAction);
              }).map(function (model) {
                return model.name;
              });
              return _context5.abrupt("return", "Model \"".concat(modelCode, "\" not found or doesn't support ").concat(requiredAction, ". ") + "Available models: ".concat(availableModels.join(', ')));
            case 5:
              this.modelCode[modelType] = modelCode;
              return _context5.abrupt("return", "Model \"".concat(modelCode, "\" set successfully for ").concat(modelType));
            case 6:
              _context5.prev = 6;
              _t4 = _context5["catch"](3);
              return _context5.abrupt("return", "Error validating model: ".concat(_t4.message));
            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[3, 6]]);
      }));
      function setModel(_x9, _x0) {
        return _setModel.apply(this, arguments);
      }
      return setModel;
    }()
    /**
     * Set generative model code.
     * @param {string} modelCode - model code to set
     * @returns {Promise<string>} A promise that resolves to success message or error message
     */
    )
  }, {
    key: "setGenerativeModel",
    value: function setGenerativeModel(modelCode) {
      return this.setModel(modelCode, 'generative');
    }

    /**
     * Set embedding model code.
     * @param {string} modelCode - model code to set
     * @returns {Promise<string>} A promise that resolves to success message or error message
     */
  }, {
    key: "setEmbeddingModel",
    value: function setEmbeddingModel(modelCode) {
      return this.setModel(modelCode, 'embedding');
    }
  }], [{
    key: "ADAPTERS",
    get:
    /**
     * Get models.
     * @returns {object} - models with target.id as key
     * @static
     */
    function get() {
      return GEMINI_ADAPTERS;
    }

    /**
     * Default model code for each data type.
     * @returns {object} model code for data type
     */
  }, {
    key: "existsForTarget",
    value:
    /**
     * Check if Gemini AI exists for target.
     * @param {Target} target - target to check
     * @returns {boolean} - whether Gemini AI exists for target
     * @static
     * @public
     */
    function existsForTarget(target) {
      return !!GeminiAdapter.ADAPTERS[target.id];
    }

    /**
     * Get Gemini AI for target. Initialize if not exists.
     * @param {Target} target - target to get Gemini AI
     * @returns {GeminiAdapter} - Gemini AI
     */
  }, {
    key: "getForTarget",
    value: function getForTarget(target) {
      var ai = GeminiAdapter.ADAPTERS[target.id];
      if (ai) {
        return ai;
      }
      return new GeminiAdapter(target);
    }

    /**
     * Remove Gemini AI for target.
     * @param {Target} target - target to remove Gemini AI
     * @returns {void}
     */
  }, {
    key: "removeForTarget",
    value: function removeForTarget(target) {
      delete GeminiAdapter.ADAPTERS[target.id];
    }

    /**
     * Remove all Gemini Adapter.
     */
  }, {
    key: "removeAllAdapter",
    value: function removeAllAdapter() {
      Object.keys(GeminiAdapter.ADAPTERS).forEach(function (key) {
        delete GeminiAdapter.ADAPTERS[key];
      });
    }

    /**
     * Get API key.
     * @returns {string} - API key
     */
  }, {
    key: "getApiKey",
    value: function getApiKey() {
      return GeminiAdapter.apiKey;
    }

    /**
     * Set API key.
     * @param {string} key - API key
     * @returns {void}
     */
  }, {
    key: "setApiKey",
    value: function setApiKey(key) {
      GeminiAdapter.apiKey = key;
    }

    /**
     * Base URL for Gemini AI.
     * @type {string}
     */
  }, {
    key: "validateApiKey",
    value: (function () {
      var _validateApiKey = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.mark(function _callee6(apiKey) {
        var testSDK, pager, iterator, firstModel, errorMessage, _t5;
        return _regeneratorRuntime.wrap(function (_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!(!apiKey || !apiKey.trim())) {
                _context6.next = 1;
                break;
              }
              return _context6.abrupt("return", {
                valid: false,
                error: 'API key is empty'
              });
            case 1:
              _context6.prev = 1;
              testSDK = new GoogleGenAI({
                apiKey: apiKey.trim(),
                baseUrl: GeminiAdapter.baseUrl
              }); // Test API key by listing models (this doesn't consume tokens)
              _context6.next = 2;
              return testSDK.models.list();
            case 2:
              pager = _context6.sent;
              // Try to get at least one model to confirm access
              iterator = pager[Symbol.asyncIterator]();
              _context6.next = 3;
              return iterator.next();
            case 3:
              firstModel = _context6.sent;
              if (!firstModel.done) {
                _context6.next = 4;
                break;
              }
              return _context6.abrupt("return", {
                valid: false,
                error: 'No models available with this API key'
              });
            case 4:
              return _context6.abrupt("return", {
                valid: true
              });
            case 5:
              _context6.prev = 5;
              _t5 = _context6["catch"](1);
              errorMessage = 'Invalid API key';
              if (_t5.message) {
                if (_t5.message.includes('API_KEY_INVALID')) {
                  errorMessage = 'API key is invalid';
                } else if (_t5.message.includes('permission')) {
                  errorMessage = 'API key lacks required permissions';
                } else if (_t5.message.includes('quota')) {
                  errorMessage = 'API quota exceeded';
                } else {
                  errorMessage = "API error: ".concat(_t5.message);
                }
              }
              return _context6.abrupt("return", {
                valid: false,
                error: errorMessage
              });
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 5]]);
      }));
      function validateApiKey(_x1) {
        return _validateApiKey.apply(this, arguments);
      }
      return validateApiKey;
    }())
  }]);
}();
_defineProperty(GeminiAdapter, "MODEL_CODE", {
  generative: 'gemini-2.0-flash',
  embedding: 'gemini-embedding-exp'
});
/**
 * API key for Gemini AI.
 * @type {string}
 */
_defineProperty(GeminiAdapter, "apiKey", null);
_defineProperty(GeminiAdapter, "baseUrl", 'https://generativelanguage.googleapis.com');
/**
 * Request types for AI operations.
 * @returns {object} request types
 */
_defineProperty(GeminiAdapter, "REQUEST_TYPE", {
  GENERATE: 'generate',
  CHAT: 'chat',
  EMBEDDING: 'embedding'
});
/**
 * Function calling modes for AI operations.
 * @returns {object} function calling modes
 */
_defineProperty(GeminiAdapter, "FUNCTION_CALLING_NONE", FunctionCallingConfigMode.NONE);
_defineProperty(GeminiAdapter, "FUNCTION_CALLING_AUTO", FunctionCallingConfigMode.AUTO);
_defineProperty(GeminiAdapter, "FUNCTION_CALLING_ANY", FunctionCallingConfigMode.ANY);

/**
 * This module provides a set of utility functions for working with costumes.
 * @module costume-util
 */

/**
 * Convert full-width characters to half-width characters.
 * @param {string} str - string to convert
 * @returns {string} - converted string
 */
var convertToHalfWidthInt = function convertToHalfWidthInt(str) {
  return str.replace(/[０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  }).replace(/[-－﹣−‐⁃‑‒–—﹘―⎯⏤ーｰ─━]/g, '-');
};

/**
 * Convert array index from one-base to zero-base.
 * If index is negative, it is converted from the end of the array.
 * Returns most close index if index is out of range.
 * @param {number} index - one-base array index
 * @param {number} length - array length
 * @returns {number | undefined} - converted array index
 */
var convertToZeroBaseIndex = function convertToZeroBaseIndex(index, length) {
  if (length === 0) {
    return;
  }
  if (index > length) {
    return length - 1;
  }
  if (index < 0) {
    index = length + index;
    if (index < 0) {
      return 0;
    }
  } else {
    index--;
  }
  return index;
};

/**
 * Convert costume to dataURL.
 * @param {!object} costume - costume
 * @param {string?} format - format of the dataURL default is 'png'
 * @returns {Promise<string>} - a Promise that resolves when the image is converted
 */
var costumeToDataURL = function costumeToDataURL(costume) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'png';
  if (costume.asset.dataFormat === format) {
    return Promise.resolve(costume.asset.encodeDataURI());
  }
  var blob = new Blob([costume.asset.data], {
    type: costume.asset.assetType.contentType
  });
  var imageElement = new Image();
  imageElement.src = URL.createObjectURL(blob);
  return new Promise(function (resolve) {
    imageElement.onload = function (e) {
      URL.revokeObjectURL(imageElement.src);
      var img = e.target;
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      var imageData = canvas.toDataURL("image/".concat(format));
      resolve(imageData);
    };
  });
};

/**
 * Get costume by name or number.
 * If costumeName was not found and it is a number, it is treated as a one-base index.
 * Then that index was a negative number, it is treated as a zero-base index from the end of the costume list.
 * @param {!Target} target - target to get costume
 * @param {string} costumeName - name or number of the costume
 * @returns {object | undefined} - costume
 */
var getCostumeByNameOrNumber = function getCostumeByNameOrNumber(target, costumeName) {
  var costumeArray = target.getCostumes();
  var costume = costumeArray.find(function (c) {
    return c.name === costumeName;
  });
  if (!costume) {
    var costumeNumber = parseInt(convertToHalfWidthInt(costumeName), 10);
    if (!isNaN(costumeNumber) && costumeNumber !== 0) {
      var costumeIndex = convertToZeroBaseIndex(costumeNumber, costumeArray.length);
      if (typeof costumeIndex !== 'undefined') {
        costume = costumeArray[costumeIndex];
      }
    }
  }
  return costume;
};

/**
 * Add image as a costume.
 * @param {Target} target - target to add costume
 * @param {string} dataURL - image data
 * @param {Runtime} runtime - runtime
 * @param {string} imageName - name of the costume
 * @param {VirtualMachine} vm - virtual machine
 * @returns {Promise} - a Promise that resolves when the image is added
*/
var addImageAsCostume = function addImageAsCostume(target, dataURL, runtime) {
  var imageName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'costume';
  var vm = arguments.length > 4 ? arguments[4] : undefined;
  var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
  var assetType;
  var dataFormat;
  if (mimeString === 'image/svg+xml') {
    assetType = runtime.storage.AssetType.ImageVector;
    dataFormat = runtime.storage.DataFormat.SVG;
  } else if (mimeString === 'image/jpeg') {
    assetType = runtime.storage.AssetType.ImageBitmap;
    dataFormat = runtime.storage.DataFormat.JPG;
  } else if (mimeString === 'image/png') {
    assetType = runtime.storage.AssetType.ImageBitmap;
    dataFormat = runtime.storage.DataFormat.PNG;
  } else {
    return Promise.reject(new Error("Unsupported image type: ".concat(mimeString)));
  }
  // Convert base64 to raw binary data held in a dataURL.
  // @see https://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
  var byteString;
  if (dataURL.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(dataURL.split(',')[1]);
  } else {
    byteString = decodeURI(dataURL.split(',')[1]);
  }
  var data = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    data[i] = byteString.charCodeAt(i);
  }
  var asset = runtime.storage.createAsset(assetType, dataFormat, data, null, true // generate md5
  );
  var newCostume = {
    name: imageName,
    dataFormat: dataFormat,
    asset: asset,
    md5: "".concat(asset.assetId, ".").concat(dataFormat),
    assetId: asset.assetId
  };
  var currentCostumeIndex = target.currentCostume;
  if (vm) {
    return vm.addCostume(newCostume.md5, newCostume, target.id).then(function () {
      target.setCostume(currentCostumeIndex);
      runtime.emitProjectChanged();
    });
  }
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload = function () {
      resolve(image);
      image.onload = null;
      image.onerror = null;
    };
    image.onerror = function () {
      reject(new Error('Costume load failed. Asset could not be read.'));
      image.onload = null;
      image.onerror = null;
    };
    image.src = asset.encodeDataURI();
  }).then(function (imageElem) {
    var canvas = document.createElement('canvas');
    canvas.width = imageElem.width;
    canvas.height = imageElem.height;
    var context = canvas.getContext('2d');
    context.drawImage(imageElem, 0, 0);
    newCostume.skinId = runtime.renderer.createBitmapSkin(canvas, newCostume.bitmapResolution);
    var renderSize = runtime.renderer.getSkinSize(newCostume.skinId);
    // Actual size, since all bitmaps are resolution 2
    newCostume.size = [renderSize[0] * 2, renderSize[1] * 2];
    var rotationCenter = runtime.renderer.getSkinRotationCenter(newCostume.skinId);
    // Actual rotation center, since all bitmaps are resolution 2
    newCostume.rotationCenterX = rotationCenter[0] * 2;
    newCostume.rotationCenterY = rotationCenter[1] * 2;
    newCostume.bitmapResolution = 2;
  }).then(function () {
    target.addCostume(newCostume);
    target.setCostume(currentCostumeIndex);
    runtime.emitProjectChanged();
  });
};

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * Parse content parts text.
 * @param {string} contentPartsText - content parts text
 * @returns {string[]} - content part directives
 */
var parseContentPartsText = function parseContentPartsText(contentPartsText) {
  var parser = /(.*?)[\s\u3000"'`[{(,.]*(data:\w+\/[\w+-]+;base64,[a-zA-Z0-9+/=]+)[\s\u3000"'`\]}),.]*|(.*)/gi;
  var contentPartDirectives = [];
  var matches = contentPartsText.matchAll(parser);
  var _iterator = _createForOfIteratorHelper(matches),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var match = _step.value;
      if (match[1]) contentPartDirectives.push(match[1]);
      if (match[2]) contentPartDirectives.push(match[2]);
      if (match[3]) contentPartDirectives.push(match[3]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return contentPartDirectives;
};

/**
 * Interpret content part directives.
 * @param {string[]} contentPartDirectives - content part directives
 * @param {Target} requester - target which is requesting to AI
 * @param {Runtime} runtime - runtime
 * @returns {object[]} - content parts
 */
var interpretContentPartDirectives = function interpretContentPartDirectives(contentPartDirectives) {
  return contentPartDirectives.map(function (directive) {
    if (directive.trim().match(/data:\w+\/[\w+-]+;base64,[a-zA-Z0-9+/=]+/)) {
      return {
        type: 'dataURL',
        data: directive
      };
    }
    return {
      type: 'text',
      data: directive
    };
  });
};

/**
 * Interpret content parts text.
 * @param {string} contentPartsText - content parts text
 * @returns {object[]} - content parts
 */
var interpretContentPartsText = function interpretContentPartsText(contentPartsText) {
  var contentPartDirectives = parseContentPartsText(contentPartsText);
  var contentParts = interpretContentPartDirectives(contentPartDirectives);
  return contentParts;
};

/**
 * Applies a function to each element of an array and returns the results in a new array.
 * @param {function} func - function to apply
 * @param {Array} arg1 - array to map over
 * @param {Array} arg2 - array to map over
 * @returns {Array} - mapped array
 */
var zipWith = function zipWith(func, arg1, arg2) {
  var arg2Length = arg2.length;
  return (arg1.length <= arg2Length ? arg1 : arg1.slice(0, arg2Length)).map(function (x, i) {
    return func(x, arg2[i]);
  });
};

/**
 * Computes the euclidean distance between two vectors.
 * @param {number[]} vectorA - vector A
 * @param {number[]} vectorB - vector B
 * @returns {number} - euclidean distance
 * @see {@link https://en.wikipedia.org/wiki/Euclidean_distance}
 */
var euclideanDistance = function euclideanDistance(vectorA, vectorB) {
  return Math.hypot.apply(Math, _toConsumableArray(zipWith(function (a, b) {
    return a - b;
  }, vectorA, vectorB)));
};

/**
 * Computes the dot product of two vectors.
 * @param {number[]} vectorA - vector A
 * @param {number[]} vectorB - vector B
 * @returns {number} - dot product
 */
var dotProduct = function dotProduct(vectorA, vectorB) {
  return zipWith(function (a, b) {
    return a * b;
  }, vectorA, vectorB).reduce(function (a, b) {
    return a + b;
  }, 0);
};

/**
 * Formatter which is used for translation.
 * This will be replaced which is used in the runtime.
 * @param {object} messageData - format-message object
 * @returns {string} - message for the locale
 */
var formatMessage = function formatMessage(messageData) {
  return messageData.default;
};

/**
 * Setup format-message for this extension.
 */
var setupTranslations = function setupTranslations() {
  var localeSetup = formatMessage.setup();
  if (localeSetup && localeSetup.translations[localeSetup.locale]) {
    Object.assign(localeSetup.translations[localeSetup.locale], translations[localeSetup.locale]);
  }
};
var EXTENSION_ID = 'gai';

/**
 * URL to get this extension as a module.
 * When it was loaded as a module, 'extensionURL' will be replaced a URL which is retrieved from.
 * @type {string}
 */
var extensionURL = 'https://yokobond.github.io/xcx-gai/dist/gai.mjs';

/**
 * Xcratch blocks for Gemini Generative AI (GAI).
 * This class provides blocks to interact with Gemini API.
 */
var GeminiBlocks = /*#__PURE__*/function () {
  /**
   * Construct a set of blocks for Gemini.
   * @param {Runtime} runtime - the Scratch 3.0 runtime.
   */
  function GeminiBlocks(runtime) {
    var _this = this;
    _classCallCheck$1(this, GeminiBlocks);
    /**
     * The Scratch 3.0 runtime.
     * @type {Runtime}
     */
    this.runtime = runtime;
    if (runtime.formatMessage) {
      // Replace 'formatMessage' to a formatter which is used in the runtime.
      formatMessage = runtime.formatMessage;
    }
    runtime.on('EXTENSION_ADDED', this.onExtensionAdded.bind(this));
    this.runtime.on('PROJECT_STOP_ALL', function () {
      _this.stopListening();
    });
    this.functionNamePrefix = 'func_';
    this.functionArgPrefix = 'arg_';
  }
  return _createClass$1(GeminiBlocks, [{
    key: "onExtensionAdded",
    value: function onExtensionAdded(extensionInfo) {
      if (extensionInfo.id === 'gai') {
        checkDebugMode();
      }
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
  }, {
    key: "getInfo",
    value: function getInfo() {
      setupTranslations();
      return {
        id: GeminiBlocks.EXTENSION_ID,
        name: GeminiBlocks.EXTENSION_NAME,
        extensionURL: GeminiBlocks.extensionURL,
        blockIconURI: img,
        showStatusButton: false,
        blocks: [{
          opcode: 'generate',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.generate',
            default: 'generate [PROMPT]',
            description: 'generate block text of GAI'
          }),
          func: 'generate',
          arguments: {
            PROMPT: {
              type: ArgumentType.STRING,
              defaultValue: formatMessage({
                id: 'gai.generateDefault',
                default: 'What is AI?',
                description: 'default generate prompt for Gemini'
              })
            }
          }
        }, {
          opcode: 'chat',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.chat',
            default: 'chat [PROMPT]',
            description: 'chat block text of GAI'
          }),
          func: 'chat',
          arguments: {
            PROMPT: {
              type: ArgumentType.STRING,
              defaultValue: formatMessage({
                id: 'gai.chatDefault',
                default: 'Hello Gemini!',
                description: 'default chat prompt for GAI'
              })
            }
          }
        }, {
          opcode: 'chatHistory',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'gai.chatHistory',
            default: 'chat history',
            description: 'chat history block text for Gemini'
          }),
          disableMonitor: true,
          func: 'chatHistory',
          arguments: {}
        }, {
          opcode: 'startChat',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.startChat',
            default: 'start chat with history [HISTORY]',
            description: 'start chat for Gemini'
          }),
          func: 'startChat',
          arguments: {
            HISTORY: {
              type: ArgumentType.STRING,
              defaultValue: ' '
            }
          }
        }, '---', {
          opcode: 'whenResponseReceived',
          blockType: BlockType.EVENT,
          text: formatMessage({
            id: 'gai.whenResponseReceived',
            default: 'when response received',
            description: 'when response received for Gemini'
          }),
          isEdgeActivated: false,
          shouldRestartExistingThreads: true
        }, {
          opcode: 'responseText',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'gai.responseText',
            default: 'response draft #[CANDIDATE_INDEX]',
            description: 'last result of Gemini'
          }),
          disableMonitor: true,
          func: 'responseText',
          arguments: {
            CANDIDATE_INDEX: {
              type: ArgumentType.NUMBER,
              menu: 'responseCandidateIndexMenu'
            }
          }
        }, {
          opcode: 'responseSafetyRating',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'gai.responseSafetyRating',
            default: 'response #[CANDIDATE_INDEX] safety rating [HARM_CATEGORY]',
            description: 'last result text for Gemini'
          }),
          disableMonitor: true,
          func: 'responseSafetyRating',
          arguments: {
            CANDIDATE_INDEX: {
              type: ArgumentType.NUMBER,
              menu: 'responseCandidateIndexMenu'
            },
            HARM_CATEGORY: {
              type: ArgumentType.STRING,
              menu: 'harmCategoryMenu'
            }
          }
        }, {
          opcode: 'whenPartialResponseReceived',
          blockType: BlockType.EVENT,
          text: formatMessage({
            id: 'gai.whenPartialResponseReceived',
            default: 'when partial response received',
            description: 'when partial response received for Gemini'
          }),
          isEdgeActivated: false,
          shouldRestartExistingThreads: true
        }, {
          opcode: 'partialResponseText',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'gai.partialResponseText',
            default: 'partial response text',
            description: 'partial response text of Gemini'
          }),
          disableMonitor: true,
          func: 'partialResponseText',
          arguments: {}
        }, '---', {
          opcode: 'costumeData',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.costumeData',
            default: 'costume data [COSTUME]'
          }),
          func: 'costumeData',
          arguments: {
            COSTUME: {
              type: ArgumentType.STRING,
              menu: 'costumeMenu'
            }
          }
        }, {
          opcode: 'backdropData',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.backdropData',
            default: 'backdrop data [BACKDROP]'
          }),
          func: 'backdropData',
          arguments: {
            BACKDROP: {
              type: ArgumentType.STRING,
              menu: 'backdropMenu'
            }
          }
        }, {
          opcode: 'snapshotData',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.snapshotData',
            default: 'snapshot data',
            description: 'snapshotData block text for Gemini'
          }),
          func: 'snapshotData',
          arguments: {}
        }, {
          opcode: 'soundData',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.soundData',
            default: 'sound data [SOUND]',
            description: 'soundData block text for Gemini'
          }),
          func: 'soundData',
          arguments: {
            SOUND: {
              type: ArgumentType.STRING,
              menu: 'soundMenu'
            }
          }
        }, {
          opcode: 'startListening',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.startListening',
            default: 'start listening',
            description: 'startListening block text for Gemini'
          }),
          func: 'startListening',
          arguments: {}
        }, {
          opcode: 'stopListening',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.stopListening',
            default: 'stop listening',
            description: 'stopListening block text for Gemini'
          }),
          func: 'stopListening',
          arguments: {}
        }, {
          opcode: 'listenedData',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.listenedData',
            default: 'listened data',
            description: 'listenedData block text for Gemini'
          }),
          func: 'listenedData',
          arguments: {}
        }, '---', {
          opcode: 'setSafetyRating',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.setSafetyRating',
            default: 'set [HARM_CATEGORY] to [BLOCK_THRESHOLD]',
            description: 'set safety rating for Gemini'
          }),
          disableMonitor: true,
          func: 'setSafetyRating',
          arguments: {
            HARM_CATEGORY: {
              type: ArgumentType.STRING,
              menu: 'harmCategorySettingMenu'
            },
            BLOCK_THRESHOLD: {
              type: ArgumentType.STRING,
              menu: 'harmBlockThresholdMenu'
            }
          }
        }, {
          opcode: 'setGenerationConfig',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.setGenerationConfig',
            default: 'set generation [CONFIG] to [VALUE]',
            description: 'set generation config block text for Gemini'
          }),
          func: 'setGenerationConfig',
          arguments: {
            CONFIG: {
              type: ArgumentType.STRING,
              menu: 'generationConfigMenu'
            },
            VALUE: {
              type: ArgumentType.STRING,
              defaultValue: '1'
            }
          }
        }, {
          opcode: 'generationConfig',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.generationConfig',
            default: 'generation [CONFIG]',
            description: 'generation config block text for Gemini'
          }),
          func: 'generationConfig',
          arguments: {
            CONFIG: {
              type: ArgumentType.STRING,
              menu: 'generationConfigMenu'
            }
          }
        }, '---', {
          opcode: 'setFunctionCallingMode',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.setFunctionCallingMode',
            default: 'set function calling mode [MODE]',
            description: 'set function calling mode block text for Gemini'
          }),
          func: 'setFunctionCallingMode',
          arguments: {
            MODE: {
              type: ArgumentType.STRING,
              menu: 'functionCallingModeMenu'
            }
          }
        }, {
          opcode: 'returnResultToAI',
          blockType: BlockType.COMMAND,
          isTerminal: true,
          text: formatMessage({
            id: 'gai.returnResultToAI',
            default: 'return [RESULT] to AI',
            description: 'return result to AI block text for Gemini'
          }),
          arguments: {
            RESULT: {
              type: ArgumentType.STRING,
              defaultValue: ' '
            }
          }
        }, '---', {
          opcode: 'countTokensAs',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'gai.countTokensAs',
            default: 'count tokens [CONTENT] as [REQUEST_TYPE]',
            description: 'count tokens block text for Gemini'
          }),
          func: 'countTokensAs',
          arguments: {
            CONTENT: {
              type: ArgumentType.STRING,
              defaultValue: ' '
            },
            REQUEST_TYPE: {
              type: ArgumentType.STRING,
              menu: 'countTokensRequestTypeMenu'
            }
          }
        }, {
          opcode: 'setGenerativeModel',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.setGenerativeModel',
            default: 'use model [MODEL_CODE] for generative',
            description: 'generative model code setting block for Gemini'
          }),
          func: 'setGenerativeModel',
          arguments: {
            MODEL_CODE: {
              type: ArgumentType.STRING,
              defaultValue: GeminiAdapter.MODEL_CODE.generative
            }
          }
        }, {
          opcode: 'getGenerativeModel',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.getGenerativeModel',
            default: 'generative model',
            description: 'generative model block text for Gemini'
          }),
          func: 'getGenerativeModel',
          arguments: {}
        }, {
          opcode: 'getGenerativeModelID',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.getGenerativeModelID',
            default: 'generative model ID at [MODEL_INDEX]',
            description: 'generative model ID block text for Gemini'
          }),
          func: 'getGenerativeModelID',
          arguments: {
            MODEL_INDEX: {
              type: ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        }, {
          opcode: 'getMaxGenerativeModelNumber',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.getMaxGenerativeModelNumber',
            default: 'max generative model number',
            description: 'max generative model number block text for Gemini'
          }),
          func: 'getMaxGenerativeModelNumber',
          arguments: {}
        }, '---', {
          opcode: 'getValueFromJson',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'gai.getValueFromJson',
            default: 'get [PATH] from JSON [JSON]',
            description: 'get value from JSON block text for Gemini'
          }),
          func: 'getValueFromJson',
          arguments: {
            PATH: {
              type: ArgumentType.STRING,
              defaultValue: 'key1.key2'
            },
            JSON: {
              type: ArgumentType.STRING,
              defaultValue: '{"key1":{"key2":"value"}}'
            }
          }
        }, {
          opcode: 'getItemOfJsonArray',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'gai.getItemOfJsonArray',
            default: 'item [INDEX] of JSON array [JSON]',
            description: 'get value from JSON array block text for Gemini'
          }),
          func: 'getItemOfJsonArray',
          arguments: {
            INDEX: {
              type: ArgumentType.NUMBER,
              defaultValue: 1
            },
            JSON: {
              type: ArgumentType.STRING,
              defaultValue: '[1,2,3]'
            }
          }
        }, {
          opcode: 'lengthOfJsonArray',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'gai.lengthOfJsonArray',
            default: 'length of JSON array [JSON]',
            description: 'length of JSON array block text for Gemini'
          }),
          func: 'lengthOfJsonArray',
          arguments: {
            JSON: {
              type: ArgumentType.STRING,
              defaultValue: '[1,2,3]'
            }
          }
        }, '---', {
          opcode: 'embeddingFor',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'gai.embeddingFor',
            default: 'embedding of [CONTENT] for [TASK_TYPE]',
            description: 'embed block text for Gemini'
          }),
          func: 'embeddingFor',
          arguments: {
            CONTENT: {
              type: ArgumentType.STRING,
              defaultValue: ' '
            },
            TASK_TYPE: {
              type: ArgumentType.STRING,
              menu: 'embeddingTaskTypeMenu'
            }
          }
        }, {
          opcode: 'embeddingDistanceOf',
          blockType: BlockType.REPORTER,
          text: formatMessage({
            id: 'gai.embeddingDistanceOf',
            default: '[METRIC] of [VECTOR_A] and [VECTOR_B]',
            description: 'vector distance block text for Gemini'
          }),
          func: 'embeddingDistanceOf',
          arguments: {
            METRIC: {
              type: ArgumentType.STRING,
              menu: 'distanceMetricMenu'
            },
            VECTOR_A: {
              type: ArgumentType.STRING,
              defaultValue: '1,1,1'
            },
            VECTOR_B: {
              type: ArgumentType.STRING,
              defaultValue: '1,2,3'
            }
          }
        }, '---', {
          opcode: 'setEmbeddingModel',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.setEmbeddingModel',
            default: 'use model [MODEL_CODE] for embedding',
            description: 'embedding model code setting block for Gemini'
          }),
          func: 'setEmbeddingModel',
          arguments: {
            MODEL_CODE: {
              type: ArgumentType.STRING,
              defaultValue: GeminiAdapter.MODEL_CODE.embedding
            }
          }
        }, {
          opcode: 'getEmbeddingModel',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.getEmbeddingModel',
            default: 'embedding model',
            description: 'embedding model block text for Gemini'
          }),
          func: 'getEmbeddingModel',
          arguments: {}
        }, {
          opcode: 'getEmbeddingModelID',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.getEmbeddingModelID',
            default: 'embedding model ID at [MODEL_INDEX]',
            description: 'embedding model ID block text for Gemini'
          }),
          func: 'getEmbeddingModelID',
          arguments: {
            MODEL_INDEX: {
              type: ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        }, {
          opcode: 'getMaxEmbeddingModelNumber',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.getMaxEmbeddingModelNumber',
            default: 'max embedding model number',
            description: 'max embedding model number block text for Gemini'
          }),
          func: 'getMaxEmbeddingModelNumber',
          arguments: {}
        }, '---', {
          opcode: 'askApiKey',
          blockType: BlockType.COMMAND,
          blockAllThreads: true,
          text: formatMessage({
            id: 'gai.askApiKey',
            default: 'ask API key',
            description: 'ask API key for Gemini'
          }),
          func: 'askApiKey',
          arguments: {}
        }, {
          opcode: 'apiKey',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.apiKey',
            default: 'API key',
            description: 'API key for Gemini'
          }),
          func: 'apiKey',
          arguments: {}
        }, {
          opcode: 'setApiKey',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.setApiKey',
            default: 'set API key to [KEY]',
            description: 'set API key for Gemini'
          }),
          func: 'setApiKey',
          arguments: {
            KEY: {
              type: ArgumentType.STRING,
              defaultValue: ' ',
              description: 'API key for Gemini'
            }
          }
        }, {
          opcode: 'setBaseUrl',
          blockType: BlockType.COMMAND,
          text: formatMessage({
            id: 'gai.setBaseUrl',
            default: 'set base URL to [URL]',
            description: 'set base URL for Gemini'
          }),
          func: 'setBaseUrl',
          arguments: {
            URL: {
              type: ArgumentType.STRING,
              defaultValue: GeminiAdapter.baseUrl,
              description: 'default base URL for Gemini'
            }
          }
        }, {
          opcode: 'baseUrl',
          blockType: BlockType.REPORTER,
          disableMonitor: true,
          text: formatMessage({
            id: 'gai.baseUrl',
            default: 'base URL',
            description: 'base URL for Gemini'
          }),
          func: 'baseUrl',
          arguments: {}
        }],
        menus: {
          costumeMenu: {
            acceptReporters: true,
            items: 'getCostumeMenu'
          },
          backdropMenu: {
            acceptReporters: true,
            items: 'getBackdropMenu'
          },
          soundMenu: {
            acceptReporters: true,
            items: 'getSoundMenu'
          },
          responseCandidateIndexMenu: {
            acceptReporters: true,
            items: 'getResponseCandidateIndexMenu'
          },
          harmCategorySettingMenu: {
            acceptReporters: false,
            items: 'getHarmCategorySettingMenu'
          },
          harmCategoryMenu: {
            acceptReporters: false,
            items: 'getHarmCategoryMenu'
          },
          harmBlockThresholdMenu: {
            acceptReporters: false,
            items: 'getHarmBlockThresholdMenu'
          },
          generationConfigMenu: {
            acceptReporters: false,
            items: 'getGenerationConfigMenu'
          },
          functionCallingModeMenu: {
            acceptReporters: false,
            items: 'getFunctionCallingModeMenu'
          },
          countTokensRequestTypeMenu: {
            acceptReporters: false,
            items: 'getCountTokensRequestTypeMenu'
          },
          distanceMetricMenu: {
            acceptReporters: false,
            items: 'getEmbeddingDistanceMetricMenu'
          },
          embeddingTaskTypeMenu: {
            acceptReporters: false,
            items: 'getEmbeddingTaskTypeMenu'
          }
        }
      };
    }
  }, {
    key: "getCostumeMenu",
    value: function getCostumeMenu() {
      var menu = [];
      var target = this.runtime.getEditingTarget();
      if (!target) {
        return menu;
      }
      var costumes = target.sprite.costumes;
      for (var i = 0; i < costumes.length; i++) {
        menu.push({
          text: costumes[i].name,
          value: costumes[i].name
        });
      }
      return menu;
    }
  }, {
    key: "getBackdropMenu",
    value: function getBackdropMenu() {
      var menu = [];
      var target = this.runtime.getTargetForStage();
      var backdrops = target.sprite.costumes;
      for (var i = 0; i < backdrops.length; i++) {
        menu.push({
          text: backdrops[i].name,
          value: backdrops[i].name
        });
      }
      return menu;
    }
  }, {
    key: "getSoundMenu",
    value: function getSoundMenu() {
      var menu = [];
      var target = this.runtime.getEditingTarget();
      if (!target) {
        return [''];
      }
      var sounds = target.sprite.sounds;
      for (var i = 0; i < sounds.length; i++) {
        menu.push({
          text: sounds[i].name,
          value: sounds[i].name
        });
      }
      if (sounds.length === 0) {
        return [''];
      }
      return menu;
    }
  }, {
    key: "getResponseCandidateIndexMenu",
    value: function getResponseCandidateIndexMenu() {
      var menu = [{
        text: '1',
        value: '1'
      }];
      var target = this.runtime.getEditingTarget();
      if (!target) {
        return menu;
      }
      var ai = this.getAI(target);
      var candidateCount = ai.generationConfig.candidateCount;
      if (!candidateCount) {
        return menu;
      }
      for (var i = 1; i < candidateCount; i++) {
        menu.push({
          text: String(i + 1),
          value: String(i + 1)
        });
      }
      return menu;
    }
  }, {
    key: "getHarmCategoryMenu",
    value: function getHarmCategoryMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.harmCategoryMenu.hateSpeech',
          default: 'Hate Speech',
          description: 'harm category menu item for hate speech in Gemini'
        }),
        value: HarmCategory.HARM_CATEGORY_HATE_SPEECH
      }, {
        text: formatMessage({
          id: 'gai.harmCategoryMenu.sexuallyExplicit',
          default: 'Sexually Explicit',
          description: 'harm category menu item for sexually explicit in Gemini'
        }),
        value: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT
      }, {
        text: formatMessage({
          id: 'gai.harmCategoryMenu.harassment',
          default: 'Harassment',
          description: 'harm category menu item for harassment in Gemini'
        }),
        value: HarmCategory.HARM_CATEGORY_HARASSMENT
      }, {
        text: formatMessage({
          id: 'gai.harmCategoryMenu.dangerousContent',
          default: 'Dangerous Content',
          description: 'harm category menu item for dangerous content in Gemini'
        }),
        value: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT
      }];
      return menu;
    }
  }, {
    key: "getHarmCategorySettingMenu",
    value: function getHarmCategorySettingMenu() {
      var menu = this.getHarmCategoryMenu();
      menu.unshift({
        text: formatMessage({
          id: 'gai.harmCategorySettingMenu.all',
          default: 'All Harm Categories',
          description: 'harm category menu item for all in Gemini'
        }),
        value: 'ALL'
      });
      return menu;
    }
  }, {
    key: "getHarmBlockThresholdMenu",
    value: function getHarmBlockThresholdMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.harmBlockThresholdMenu.unspecified',
          default: 'Unspecified',
          description: 'harm block threshold menu item for unspecified in Gemini'
        }),
        value: HarmBlockThreshold.HARM_BLOCK_THRESHOLD_UNSPECIFIED
      }, {
        text: formatMessage({
          id: 'gai.harmBlockThresholdMenu.blockMost',
          default: 'Block most',
          description: 'harm block threshold menu item for block most in Gemini'
        }),
        value: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE
      }, {
        text: formatMessage({
          id: 'gai.harmBlockThresholdMenu.blockSome',
          default: 'Block some',
          description: 'harm block threshold menu item for block some in Gemini'
        }),
        value: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
      }, {
        text: formatMessage({
          id: 'gai.harmBlockThresholdMenu.blockFew',
          default: 'Block few',
          description: 'harm block threshold menu item for block few in Gemini'
        }),
        value: HarmBlockThreshold.BLOCK_ONLY_HIGH
      }, {
        text: formatMessage({
          id: 'gai.harmBlockThresholdMenu.blockNone',
          default: 'Block None',
          description: 'harm block threshold menu item for block none in Gemini'
        }),
        value: HarmBlockThreshold.BLOCK_NONE
      }];
      return menu;
    }
  }, {
    key: "getGenerationConfigMenu",
    value: function getGenerationConfigMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.generationConfigMenu.temperature',
          default: 'Temperature',
          description: 'generation config menu item for temperature in Gemini'
        }),
        value: 'temperature'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.topP',
          default: 'Top P',
          description: 'generation config menu item for top P in Gemini'
        }),
        value: 'topP'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.topK',
          default: 'Top K',
          description: 'generation config menu item for top K in Gemini'
        }),
        value: 'topK'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.maxOutputTokens',
          default: 'Max Output Tokens',
          description: 'generation config menu item for max output tokens in Gemini'
        }),
        value: 'maxOutputTokens'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.candidateCount',
          default: 'Candidate Count',
          description: 'generation config menu item for candidate count in Gemini'
        }),
        value: 'candidateCount'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.stopSequences',
          default: 'Stop Sequences',
          description: 'generation config menu item for stop sequences in Gemini'
        }),
        value: 'stopSequences'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.systemInstruction',
          default: 'System Instruction',
          description: 'generation config menu item for system instruction in Gemini'
        }),
        value: 'systemInstruction'
      }, {
        text: formatMessage({
          id: 'gai.generationConfigMenu.responseSchema',
          default: 'Response Schema',
          description: 'generation config menu item for response schema in Gemini'
        }),
        value: 'responseSchema'
      }];
      return menu;
    }
  }, {
    key: "getFunctionCallingModeMenu",
    value: function getFunctionCallingModeMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.functionCallingModeMenu.auto',
          default: 'Auto',
          description: 'function calling mode menu item for auto in Gemini'
        }),
        value: 'AUTO'
      }, {
        text: formatMessage({
          id: 'gai.functionCallingModeMenu.any',
          default: 'Any',
          description: 'function calling mode menu item for function calling mode in Gemini'
        }),
        value: 'ANY'
      }, {
        text: formatMessage({
          id: 'gai.functionCallingModeMenu.none',
          default: 'None',
          description: 'function calling mode menu item for none in Gemini'
        }),
        value: 'NONE'
      }];
      return menu;
    }
  }, {
    key: "getCountTokensRequestTypeMenu",
    value: function getCountTokensRequestTypeMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.countTokensRequestTypeMenu.generate',
          default: 'Generate',
          description: 'count tokens request type menu item for generate in Gemini'
        }),
        value: 'generate'
      }, {
        text: formatMessage({
          id: 'gai.countTokensRequestTypeMenu.chat',
          default: 'Chat',
          description: 'count tokens request type menu item for chat in Gemini'
        }),
        value: 'chat'
      }];
      return menu;
    }
  }, {
    key: "getEmbeddingDistanceMetricMenu",
    value: function getEmbeddingDistanceMetricMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.distanceMetricMenu.dotProduct',
          default: 'Dot Product',
          description: 'distance metric menu item for dot product in Gemini'
        }),
        value: 'dotProduct'
      }, {
        text: formatMessage({
          id: 'gai.distanceMetricMenu.euclidean',
          default: 'Euclidean Distance',
          description: 'distance metric menu item for euclidean in Gemini'
        }),
        value: 'euclidean'
      }];
      return menu;
    }
  }, {
    key: "getEmbeddingTaskTypeMenu",
    value: function getEmbeddingTaskTypeMenu() {
      var menu = [{
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.semanticSimilarity',
          default: 'Semantic Similarity',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.SEMANTIC_SIMILARITY
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.classification',
          default: 'Classification',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.CLASSIFICATION
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.clustering',
          default: 'Clustering',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.CLUSTERING
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.retrievalDocument',
          default: 'Retrieval Document',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.RETRIEVAL_DOCUMENT
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.retrievalQuery',
          default: 'Retrieval Query',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.RETRIEVAL_QUERY
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.questionAnswering',
          default: 'Question Answering',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.QUESTION_ANSWERING
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.factVerification',
          default: 'Fact Verification',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.FACT_VERIFICATION
      }, {
        text: formatMessage({
          id: 'gai.embeddingTaskTypeMenu.codeRetrievalQuery',
          default: 'Code Retrieval Query',
          description: 'embedding task type menu item in Gemini'
        }),
        value: EmbeddingTaskType.CODE_RETRIEVAL_QUERY
      }];
      return menu;
    }

    /**
     * @param {Target} target - the target to get the AI
     * @return {GeminiAdapter} - the AI for the target
     */
  }, {
    key: "getAI",
    value: function getAI(target) {
      return GeminiAdapter.getForTarget(target);
    }

    /**
     * Get partial response text from last result.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - partial response text
     */
  }, {
    key: "partialResponseText",
    value: function partialResponseText(args, util) {
      var target = util.target;
      if (!GeminiAdapter.existsForTarget(target)) {
        return '';
      }
      var ai = GeminiAdapter.getForTarget(target);
      var response = ai.getLastPartialResponse();
      if (!response) {
        return '';
      }
      return getTextFromResponse(response);
    }

    /**
     * Whether the block is using in the target.
     * @param {string} blockOpcode - block opcode
     * @param {Target} target - the target to check
     * @returns {boolean} - whether the block is using in the target
     */
  }, {
    key: "blockIsUsingInTarget",
    value: function blockIsUsingInTarget(blockOpcode, target) {
      var executableBlocks = target.blocks._blocks;
      for (var block in executableBlocks) {
        if (executableBlocks[block].opcode === blockOpcode) {
          return true;
        }
      }
      return false;
    }

    /**
     * Dispatch function calls from the prompt in new threads.
     * @param {Array<object>} funcCalls - the function calls array
     * @param {object} util - the utility object
     * @returns {void}
     */
  }, {
    key: "dispatchFunctionCalls",
    value: function dispatchFunctionCalls(funcCalls, util) {
      var _this2 = this;
      var target = util.target;
      var ai = this.getAI(target);
      funcCalls.filter(function (funcCall) {
        return funcCall.status === 'PENDING';
      }).forEach(function (funcCall) {
        funcCall.status = 'PROCESSING';
        // Find the procedure definition
        var functionSpec = ai.functionRegistry[funcCall.name];
        if (!functionSpec) {
          console.warn("Procedure not found: ".concat(funcCall.name));
          funcCall.status = 'FAILED';
          return;
        }
        var procedureCode = functionSpec.procedureCode;
        // Get the procedure definition block ID
        var procedureDefinition = target.blocks.getProcedureDefinition(procedureCode);
        if (!procedureDefinition) {
          console.warn("Procedure definition not found: ".concat(procedureCode));
          funcCall.status = 'FAILED';
          return;
        }
        var argumentMap = {};
        Object.entries(funcCall.args).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          var paramName = functionSpec.argumentDict[key];
          if (paramName) {
            // Type conversion
            switch (functionSpec.declaration.parameters.properties[key].type) {
              case 'string':
                value = String(value);
                break;
              case 'number':
                value = Number(value);
                break;
              case 'boolean':
                value = Boolean(value);
                break;
            }
            argumentMap[paramName] = value;
          }
        });
        var procThread = _this2.runtime._pushThread(procedureDefinition, target);
        procThread.persistentParams = argumentMap;
        // Hook into the thread's getParam and pushStack methods to handle persistent parameters
        var originalGetParam = procThread.getParam.bind(procThread);
        procThread.getParam = function (paramName) {
          var value = originalGetParam(paramName);
          if (value === null && procThread.persistentParams && Object.prototype.hasOwnProperty.call(procThread.persistentParams, paramName)) {
            value = procThread.persistentParams[paramName];
          }
          return value;
        };
        var originalPushStack = procThread.pushStack.bind(procThread);
        procThread.pushStack = function (blockId) {
          var result = originalPushStack(blockId);
          if (procThread.persistentParams) {
            if (procThread.initParams) {
              procThread.initParams();
              Object.entries(procThread.persistentParams).forEach(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                  paramName = _ref4[0],
                  value = _ref4[1];
                if (procThread.pushParam) {
                  procThread.pushParam(paramName, value);
                }
              });
            }
          }
          return result;
        };

        // Use STATUS_YIELD_TICK to ensure parameter setup happens before actual execution
        procThread.status = 3; // Thread.STATUS_YIELD_TICK

        procThread.functionCall = funcCall;
        funcCall.thread = procThread;
      });
    }

    /**
     * Check if all function calls have completed
     * @param {Array<FunctionCall>} funcCalls - array of function calls
     * @returns {boolean} - true if all completed
     */
  }, {
    key: "allFunctionCallsFinished",
    value: function allFunctionCallsFinished(funcCalls) {
      var _this3 = this;
      return funcCalls.every(function (funcCall) {
        return funcCall.status === 'COMPLETED' || funcCall.status === 'FAILED' || funcCall.thread && _this3.runtime.threads.indexOf(funcCall.thread) === -1;
      });
    }

    /**
     * Mark completed function calls and clean up
     * @param {Array} funcCalls - array of function calls
     */
  }, {
    key: "cleanupStoppedFunctionCalls",
    value: function cleanupStoppedFunctionCalls(funcCalls) {
      if (!Array.isArray(funcCalls) || funcCalls.length === 0) {
        return;
      }
      var indicesToRemove = [];
      for (var i = 0; i < funcCalls.length; i++) {
        var funcCall = funcCalls[i];
        if (funcCall.thread && this.runtime.threads.indexOf(funcCall.thread) === -1) {
          if (funcCall.status === 'PENDING' || funcCall.status === 'PROCESSING') {
            funcCall.status = 'STOPPED';
            if (DEBUG) {
              console.log("Function call ".concat(funcCall.name, " marked as STOPPED"));
            }
          }
          delete funcCall.thread;
          indicesToRemove.push(i);
        }
      }
      for (var _i = indicesToRemove.length - 1; _i >= 0; _i--) {
        var indexToRemove = indicesToRemove[_i];
        funcCalls.splice(indexToRemove, 1);
      }
      if (DEBUG && indicesToRemove.length > 0) {
        console.log("Cleaned up ".concat(indicesToRemove.length, " stopped function calls"));
      }
    }

    /**
     * Request AI to generate content or chat.
     * @param {string} prompt - the prompt to send to the AI.
     * @param {boolean} isChat - whether this is a chat request.
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves response text
     * @private
     */
  }, {
    key: "_requestAI",
    value: function _requestAI(prompt, isChat, util) {
      var _this4 = this;
      var target = util.target;
      var ai = this.getAI(target);
      var stackFrame = util.stackFrame;
      if (stackFrame.functionCalls) {
        var callsToStart = stackFrame.functionCalls.filter(function (funcCall) {
          return funcCall.status === 'PENDING';
        });
        if (callsToStart.length > 0) {
          this.dispatchFunctionCalls(callsToStart, util);
          util.yield();
          return;
        }
      }
      if (stackFrame.isResponseReceived) {
        if (this.allFunctionCallsFinished(stackFrame.functionCalls)) {
          this.cleanupStoppedFunctionCalls(stackFrame.functionCalls);
          return getTextFromResponse(ai.getLastResponse());
        }
      }
      if (this.blockIsUsingInTarget('gai_whenPartialResponseReceived', target)) {
        var partialResponseHandler = function partialResponseHandler(partialResponse) {
          if (partialResponse && partialResponse.text) {
            _this4.runtime.startHats('gai_whenPartialResponseReceived', null, target);
          }
          if (DEBUG) {
            console.log(partialResponse);
          }
        };
        if (!stackFrame.isRequesting) {
          stackFrame.isRequesting = true;
          this.updateFunctionRegistry(target);
          var request = isChat ? ai.requestChatStream(prompt, partialResponseHandler) : ai.requestGenerateStream(prompt, partialResponseHandler);
          request.then(function (_ref5) {
            var _stackFrame$functionC;
            var _ref6 = _slicedToArray(_ref5, 2),
              response = _ref6[0],
              functionCalls = _ref6[1];
            stackFrame.functionCalls = stackFrame.functionCalls || [];
            (_stackFrame$functionC = stackFrame.functionCalls).push.apply(_stackFrame$functionC, _toConsumableArray(functionCalls));
            if (response && response.text) {
              _this4.runtime.startHats('gai_whenResponseReceived', null, target);
            }
            stackFrame.isResponseReceived = true;
          }).catch(function (e) {
            console.error(e);
            return e.message;
          });
        }
        util.yield();
        return;
      }
      if (!stackFrame.isRequesting) {
        stackFrame.isRequesting = true;
        this.updateFunctionRegistry(target);
        var _request = isChat ? ai.requestChat(prompt) : ai.requestGenerate(prompt);
        _request.then(function (_ref7) {
          var _stackFrame$functionC2;
          var _ref8 = _slicedToArray(_ref7, 2),
            response = _ref8[0],
            functionCalls = _ref8[1];
          stackFrame.functionCalls = stackFrame.functionCalls || [];
          (_stackFrame$functionC2 = stackFrame.functionCalls).push.apply(_stackFrame$functionC2, _toConsumableArray(functionCalls));
          if (response && response.text) {
            _this4.runtime.startHats('gai_whenResponseReceived', null, target);
          }
          stackFrame.isResponseReceived = true;
        }).catch(function (error) {
          console.error(error);
          return error.message;
        });
      }
      util.yield();
    }

    /**
     * Request AI to generate content.
     * @param {object} args - the block's arguments.
     * @param {string} args.PROMPT - prompt to AI
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves response text
     */
  }, {
    key: "generate",
    value: function generate(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return 'API key is not set.';
      }
      var promptText = Cast.toString(args.PROMPT);
      var prompt = interpretContentPartsText(promptText);
      return this._requestAI(prompt, false, util);
    }

    /**
     * Chat to AI. Start chat if not started.
     * @param {object} args - the block's arguments.
     * @param {string} args.PROMPT - message to AI
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves response text
     */
  }, {
    key: "chat",
    value: function chat(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return 'API key is not set.';
      }
      var promptText = Cast.toString(args.PROMPT);
      var prompt = interpretContentPartsText(promptText);
      return this._requestAI(prompt, true, util);
    }

    /**
     * Return costume data URL.
     * @param {object} args - the block's arguments.
     * @param {string} args.COSTUME - costume name
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - data URL of the costume
     */
  }, {
    key: "costumeData",
    value: function costumeData(args, util) {
      var costumeName = Cast.toString(args.COSTUME);
      var target = util.target;
      var costume = getCostumeByNameOrNumber(target, costumeName);
      if (!costume) {
        return '';
      }
      return costumeToDataURL(costume).then(function (dataURL) {
        return " ".concat(dataURL, " ");
      });
    }

    /**
     * Return backdrop data directive.
     * @param {object} args - the block's arguments.
     * @param {string} args.BACKDROP - backdrop name
     * @returns {string} - backdrop data directive
     */
  }, {
    key: "backdropData",
    value: function backdropData(args) {
      var backdropName = Cast.toString(args.BACKDROP);
      var stage = this.runtime.getTargetForStage();
      var backdrop = getCostumeByNameOrNumber(stage, backdropName);
      if (!backdrop) {
        return '';
      }
      return costumeToDataURL(backdrop).then(function (dataURL) {
        return " ".concat(dataURL, " ");
      });
    }

    /**
     * Return snapshot data directive.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves snapshot data URL
     */
  }, {
    key: "snapshotData",
    value: function snapshotData(args, util) {
      var _this5 = this;
      var runtime = this.runtime;
      var requester = util.target;
      return new Promise(function (resolve) {
        _this5.runtime.renderer.requestSnapshot(function (imageDataURL) {
          if (DEBUG) {
            addImageAsCostume(requester, imageDataURL, runtime, 'snapshot', runtime.vm).catch(function (e) {
              console.error(e);
            });
          }
          resolve(" ".concat(imageDataURL, " "));
        });
      });
    }

    /**
     * Return sound data directive.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - sound data URL
     */
  }, {
    key: "soundData",
    value: function soundData(args, util) {
      var soundName = Cast.toString(args.SOUND);
      var target = util.target;
      var sounds = target.sprite.sounds;
      var sound;
      for (var i = 0; i < sounds.length; i++) {
        if (sounds[i].name === soundName) {
          sound = sounds[i];
          break;
        }
      }
      if (!sound) {
        return '';
      }
      return " ".concat(sound.asset.encodeDataURI(), " ");
    }

    /**
     * Start sound recorder.
     * @returns {Promise} - a Promise that resolves when recorder is started
     * or rejects if user denies access to microphone.
     */
  }, {
    key: "startSoundRecorder",
    value: function startSoundRecorder() {
      var _this6 = this;
      return navigator.mediaDevices.getUserMedia({
        audio: true
      }).then(function (stream) {
        _this6.runtime.emitMicListening(true);
        var mediaRecorder = new MediaRecorder(stream);
        _this6.soundRecorder = mediaRecorder;
        _this6.soundRecorderChunks = [];
        mediaRecorder.ondataavailable = function (event) {
          _this6.soundRecorderChunks.push(event.data);
        };
        mediaRecorder.start();
        _this6.listeningTimeout = setTimeout(function () {
          _this6.stopSoundRecorder();
        }, 60 * 1000);
      });
    }

    /**
     * Stop sound recorder.
     * @returns {?Promise<string>} - a Promise that resolves when recorder is stopped
     * and recorded sound data URL is returned
     */
  }, {
    key: "stopSoundRecorder",
    value: function stopSoundRecorder() {
      var _this7 = this;
      if (this.listeningTimeout) {
        clearTimeout(this.listeningTimeout);
        this.listeningTimeout = null;
      }
      if (this.soundRecorder) {
        return new Promise(function (resolve) {
          _this7.soundRecorder.onstop = function () {
            _this7.runtime.emitMicListening(false);
            var audioBlob = new Blob(_this7.soundRecorderChunks, {
              type: 'audio/wav'
            });
            var reader = new FileReader();
            reader.readAsDataURL(audioBlob);
            reader.onloadend = function () {
              var dataURL = reader.result;
              _this7.recordedSoundData = dataURL;
              _this7.isListening = false;
              _this7.soundRecorder = null;
              resolve(dataURL);
            };
          };
          _this7.soundRecorder.stop();
        });
      }
      return null;
    }

    /**
     * Start listening from microphone.
     * @returns {Promise} - a Promise that resolves when recorder is started
     */
  }, {
    key: "startListening",
    value: function startListening() {
      var _this8 = this;
      if (this.isListening) {
        return;
      }
      this.isListening = true;
      return this.startSoundRecorder().catch(function (e) {
        console.warn('Failed to start listening', e);
        _this8.isListening = false;
      });
    }

    /**
     * Stop listening from microphone.
     * @returns {?Promise<string>} - a Promise that resolves when recorder is stopped
     */
  }, {
    key: "stopListening",
    value: function stopListening() {
      if (!this.isListening) {
        return;
      }
      if (this.soundRecorder) {
        return this.stopSoundRecorder();
      }
    }

    /**
     * Listened data.
     * @returns {string} - recorded sound data URL
     */
  }, {
    key: "listenedData",
    value: function listenedData() {
      if (this.recordedSoundData) {
        return " ".concat(this.recordedSoundData, " ");
      }
      return '';
    }

    /**
     * Chat history.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves chat history
     */
  }, {
    key: "chatHistory",
    value: function chatHistory(args, util) {
      var target = util.target;
      if (!GeminiAdapter.existsForTarget(target)) {
        return '';
      }
      var ai = GeminiAdapter.getForTarget(target);
      var history = ai.getChatHistory();
      return JSON.stringify(history).slice(1, -1);
    }

    /**
     * Start chat with history.
     * @param {object} args - the block's arguments.
     * @param {string} args.HISTORY - contents of the history of chat
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
  }, {
    key: "startChat",
    value: function startChat(args, util) {
      var target = util.target;
      var historyText = String(args.HISTORY).trim();
      try {
        var history = JSON.parse("[".concat(historyText, "]"));
        this.getAI(target).startChat(history);
      } catch (error) {
        console.error("startChat: ".concat(error.message));
        return error.message;
      }
    }

    /**
     * Get response text from last result.
     * @param {object} args - the block's arguments.
     * @param {string} args.CANDIDATE_INDEX - index of candidate
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - response text
     */
  }, {
    key: "responseText",
    value: function responseText(args, util) {
      var target = util.target;
      if (!GeminiAdapter.existsForTarget(target)) {
        return '';
      }
      var ai = GeminiAdapter.getForTarget(target);
      var response = ai.getLastResponse();
      if (!response) {
        return '';
      }
      try {
        var candidateIndex = parseInt(args.CANDIDATE_INDEX, 10);
        var _responseText;
        if (Array.isArray(response)) {
          // the response is streaming
          if (candidateIndex !== 1) {
            // Streaming response has no candidates
            return '';
          }
          _responseText = getTextFromResponse(response);
        } else {
          _responseText = getTextFromResponse(response, candidateIndex - 1);
        }
        // Replace function names with procedureCode and argument names with their codes
        if (_responseText && ai.functionRegistry) {
          Object.values(ai.functionRegistry).forEach(function (functionSpec) {
            if (functionSpec.declaration && functionSpec.procedureCode) {
              var funcName = functionSpec.declaration.name;
              var procedureCode = functionSpec.procedureCode;
              // Replace function name with procedure code in the response text
              _responseText = _responseText.replace(new RegExp(funcName, 'g'), procedureCode);

              // Replace argument names with their codes
              if (functionSpec.argumentDict) {
                Object.entries(functionSpec.argumentDict).forEach(function (_ref9) {
                  var _ref0 = _slicedToArray(_ref9, 2),
                    argName = _ref0[0],
                    argCode = _ref0[1];
                  // Replace argument name with argument code in the response text
                  _responseText = _responseText.replace(new RegExp(argName, 'g'), argCode);
                });
              }
            }
          });
        }
        return _responseText;
      } catch (error) {
        console.error("responseText: ".concat(error.message));
        return error.message;
      }
    }

    /**
     * Get response safety rating from last result.
     * @param {object} args - the block's arguments.
     * @param {string} args.CANDIDATE_INDEX - index of candidate
     * @param {string} args.HARM_CATEGORY - harm category
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - response safety rating
     */
  }, {
    key: "responseSafetyRating",
    value: function responseSafetyRating(args, util) {
      var target = util.target;
      if (!GeminiAdapter.existsForTarget(target)) {
        return '';
      }
      var ai = GeminiAdapter.getForTarget(target);
      var response = ai.getLastResponse();
      if (!response) {
        return '';
      }
      if (Array.isArray(response)) {
        // the response is streaming
        response = response[0];
      }
      try {
        var _response$promptFeedb;
        if ((_response$promptFeedb = response.promptFeedback) !== null && _response$promptFeedb !== void 0 && _response$promptFeedb.blockReason) {
          var blockReason = response.promptFeedback.blockReason;
          if (blockReason === 'SAFETY') {
            var blockReasons = response.promptFeedback.safetyRatings.filter(function (r) {
              return r.probability !== 'NEGLIGIBLE';
            });
            return "prompt was blocked: ".concat(blockReason, " (").concat(JSON.stringify(blockReasons), ")");
          }
          // Blocked by other reason
          return "prompt was blocked: ".concat(blockReason);
        }
        var candidateIndex = parseInt(args.CANDIDATE_INDEX, 10);
        if (candidateIndex < 1 || candidateIndex > response.candidates.length) {
          return '';
        }
        var candidate = response.candidates[candidateIndex - 1];
        if (!candidate.finishReason || candidate.finishReason === 'STOP') {
          return 'NEGLIGIBLE';
        }
        if (candidate.finishReason === 'SAFETY') {
          var category = args.HARM_CATEGORY;
          var rating = candidate.safetyRatings.find(function (r) {
            return r.category === category;
          });
          if (!rating) {
            return 'NEGLIGIBLE';
          }
          return rating.probability;
        }
        // Finished by other reason
        return "finishReason: ".concat(candidate.finishReason);
      } catch (error) {
        console.error("responseSafetyRating: ".concat(error.message));
        return error.message;
      }
    }

    /**
     * Set safety rating.
     * @param {object} args - the block's arguments.
     * @param {string} args.HARM_CATEGORY - harm category
     * @param {string} args.BLOCK_THRESHOLD - block threshold
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
  }, {
    key: "setSafetyRating",
    value: function setSafetyRating(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      var harmCategory = args.HARM_CATEGORY;
      var harmBlockThreshold = args.BLOCK_THRESHOLD;
      var setParams = function setParams(category, threshold) {
        var safetyRating = {
          category: category,
          threshold: threshold
        };
        var index = ai.safetySettings.findIndex(function (r) {
          return r.category === category;
        });
        if (index >= 0) {
          ai.safetySettings[index] = safetyRating;
        } else {
          ai.safetySettings.push(safetyRating);
        }
      };
      if (harmCategory === 'ALL') {
        Object.keys(HarmCategory).forEach(function (category) {
          if (category === 'HARM_CATEGORY_UNSPECIFIED') return;
          setParams(category, harmBlockThreshold);
        });
      } else {
        setParams(harmCategory, harmBlockThreshold);
      }
    }

    /**
     * Set generation config.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONFIG - config key
     * @param {string} args.VALUE - config value
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
  }, {
    key: "setGenerationConfig",
    value: function setGenerationConfig(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      var configKey = args.CONFIG;
      var configValue = args.VALUE;
      switch (configKey) {
        case 'maxOutputTokens':
          configValue = Math.max(1, parseInt(Cast.toString(configValue), 10));
          break;
        case 'candidateCount':
          configValue = Math.max(1, parseInt(Cast.toString(configValue), 10));
          break;
        case 'stopSequences':
          configValue = Cast.toString(configValue).split(',').map(function (s) {
            return s.trim();
          });
          break;
        case 'temperature':
          configValue = Math.max(0.0, Math.min(1.0, Cast.toNumber(configValue)));
          break;
        case 'topP':
          configValue = Math.max(0.0, Math.min(1.0, Cast.toNumber(configValue)));
          break;
        case 'topK':
          configValue = Math.max(1, parseInt(Cast.toNumber(configValue), 10));
          break;
        case 'systemInstruction':
          configValue = Cast.toString(configValue);
          break;
        case 'responseSchema':
          try {
            configValue = JSON.parse(configValue);
            // Also set responseMimeType to application/json for structured output
            ai.generationConfig.responseMimeType = 'application/json';
          } catch (error) {
            // If parsing fails, delete responseSchema
            delete ai.generationConfig.responseSchema;
            delete ai.generationConfig.responseMimeType;
            return "delete ".concat(configKey, " due to error: ").concat(error.message);
          }
          break;
        default:
          return "unknown config key: ".concat(configKey);
      }
      if (configValue === '') {
        delete ai.generationConfig[configKey];
        if (configKey === 'responseSchema') {
          // Also remove responseMimeType when removing schema
          delete ai.generationConfig.responseMimeType;
        }
        return "delete ".concat(configKey);
      }
      ai.generationConfig[configKey] = configValue;
    }

    /**
     * Get generation config.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONFIG - config key
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - config value
     */
  }, {
    key: "generationConfig",
    value: function generationConfig(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      var configKey = args.CONFIG;
      var configValue = ai.generationConfig[configKey];
      if (configValue === null || typeof configValue === 'undefined') {
        return '';
      }
      if (Array.isArray(configValue)) {
        // Convert array to comma-separated string
        return configValue.join(', ');
      }
      if (_typeof$2(configValue) === 'object') {
        // Convert object to JSON string
        return JSON.stringify(configValue);
      }
      if (typeof configValue === 'number') {
        // Convert number to string
        return String(configValue);
      }
      if (typeof configValue === 'boolean') {
        // Convert boolean to string
        return configValue ? 'true' : 'false';
      }
      return configValue;
    }
  }, {
    key: "getValueFromJson",
    value: function getValueFromJson(args) {
      var jsonText = args.JSON.trim();
      if (!jsonText) {
        return '';
      }
      var jsonObject;
      try {
        jsonObject = JSON.parse(jsonText);
      } catch (error) {
        return "error: ".concat(error.message);
      }
      var path = Cast.toString(args.PATH).trim();
      if (!path) {
        return '';
      }
      var func = new Function('jsonObj', "return jsonObj.".concat(path));
      var value = func.call(this, jsonObject);
      if (typeof value === 'undefined' || value === null) {
        return '';
      }
      if (Array.isArray(value)) {
        // Convert array to JSON string
        return JSON.stringify(value);
      }
      if (_typeof$2(value) === 'object') {
        // Convert object to JSON string
        return JSON.stringify(value);
      }
      if (typeof value === 'number') {
        // Convert number to string
        return String(value);
      }
      if (typeof value === 'boolean') {
        // Convert boolean to string
        return value ? 'true' : 'false';
      }
      return String(value);
    }
  }, {
    key: "getItemOfJsonArray",
    value: function getItemOfJsonArray(args) {
      var jsonText = args.JSON.trim();
      if (!jsonText) {
        return '';
      }
      if (!jsonText.startsWith('[') && !jsonText.endsWith(']')) {
        jsonText = "[".concat(jsonText, "]"); // Wrap in array brackets if not already an array
      }
      try {
        var jsonArray = JSON.parse(jsonText);
        if (!Array.isArray(jsonArray)) {
          return 'error: not an array';
        }
        if (jsonArray.length === 0) {
          return '';
        }
        var index = parseInt(Cast.toString(args.INDEX), 10);
        if (isNaN(index) || index < 1 || index > jsonArray.length) {
          return '';
        }
        var value = jsonArray[index - 1];
        if (typeof value === 'undefined' || value === null) {
          return '';
        }
        if (Array.isArray(value)) {
          // Convert array to JSON string
          return JSON.stringify(value);
        }
        if (_typeof$2(value) === 'object') {
          // Convert object to JSON string
          return JSON.stringify(value);
        }
        if (typeof value === 'number') {
          // Convert number to string
          return String(value);
        }
        if (typeof value === 'boolean') {
          // Convert boolean to string
          return value ? 'true' : 'false';
        }
        return String(value);
      } catch (error) {
        return "error: ".concat(error.message);
      }
    }
  }, {
    key: "lengthOfJsonArray",
    value: function lengthOfJsonArray(args) {
      var jsonText = args.JSON.trim();
      if (!jsonText) {
        return 0; // Return 0 for empty JSON
      }
      if (!jsonText.startsWith('[') && !jsonText.endsWith(']')) {
        jsonText = "[".concat(jsonText, "]"); // Wrap in array brackets if not already an array
      }
      try {
        var jsonArray = JSON.parse(jsonText);
        if (!Array.isArray(jsonArray)) {
          return 0; // Return 0 if not an array
        }
        return jsonArray.length;
      } catch (error) {
        return 0; // Return 0 if parsing fails
      }
    }

    /**
     * Set the function calling mode for the target
     * @param {object} args - the arguments for the block
     * @param {object} util - the utility object
     */
  }, {
    key: "setFunctionCallingMode",
    value: function setFunctionCallingMode(args, util) {
      var mode = args.MODE;
      var target = util.target;
      var ai = this.getAI(target);
      if (mode === 'NONE') {
        ai.setFunctionCallingMode(GeminiAdapter.FUNCTION_CALLING_NONE);
      } else if (mode === 'AUTO') {
        ai.setFunctionCallingMode(GeminiAdapter.FUNCTION_CALLING_AUTO);
      } else if (mode === 'ANY') {
        ai.setFunctionCallingMode(GeminiAdapter.FUNCTION_CALLING_ANY);
      }
    }

    /**
     * Get all user-defined procedures from the target
     * @param {Target} target - the target to get procedures from
     * @returns {Array} - array of procedure information
     */
  }, {
    key: "getUserProcedures",
    value: function getUserProcedures(target) {
      var procedures = [];
      var blocks = target.blocks._blocks;
      var _loop = function _loop() {
        var block = blocks[blockId];
        if (block.opcode === 'procedures_definition') {
          // Get the procedure prototype
          var prototypeId = block.inputs.custom_block.block;
          var prototype = blocks[prototypeId];
          if (prototype && prototype.mutation) {
            var inputTypes = Object.values(prototype.inputs).filter(function (input) {
              return blocks[input.shadow].parent === prototypeId;
            }).map(function (input) {
              var inputBlock = blocks[input.shadow];
              var inputType;
              switch (inputBlock.opcode) {
                case 'argument_reporter_string_number':
                  inputType = 'string';
                  break;
                case 'argument_reporter_boolean':
                  inputType = 'boolean';
                  break;
                default:
                  inputType = 'string';
              }
              return inputType;
            });
            procedures.push({
              id: blockId,
              comment: block.comment,
              code: prototype.mutation.proccode,
              argumentNames: JSON.parse(prototype.mutation.argumentnames || '[]'),
              argumentIds: JSON.parse(prototype.mutation.argumentids || '[]'),
              argumentTypes: inputTypes,
              argumentDefaults: JSON.parse(prototype.mutation.argumentdefaults || '[]'),
              warp: prototype.mutation.warp === 'true'
            });
          }
        }
      };
      for (var blockId in blocks) {
        _loop();
      }
      return procedures;
    }

    /**
     * Register a user-defined function for AI function calling
     * @param {Target} target - the target to register the function
     * @param {object} procedure - the procedure information
     */
  }, {
    key: "registerFunction",
    value: function registerFunction(target, procedure) {
      var _target$comments$proc;
      var ai = this.getAI(target);
      var functionDescription = "".concat(procedure.code, ": ").concat(((_target$comments$proc = target.comments[procedure.comment]) === null || _target$comments$proc === void 0 ? void 0 : _target$comments$proc.text) || '');
      var functionArguments = procedure.argumentNames.map(function (name, index) {
        var reporterBlocks = Object.values(target.blocks._blocks).filter(function (aBlock) {
          var _aBlock$fields$VALUE;
          return !aBlock.shadow && ((_aBlock$fields$VALUE = aBlock.fields.VALUE) === null || _aBlock$fields$VALUE === void 0 ? void 0 : _aBlock$fields$VALUE.value) === name;
        });
        var comments = reporterBlocks.reduce(function (prev, aBlock) {
          var comment = target.comments[aBlock.comment];
          return comment ? "".concat(prev, " ").concat(comment.text, ";") : prev;
        }, "".concat(name, ": "));
        return {
          code: name,
          type: procedure.argumentTypes[index],
          description: comments
        };
      });
      ai.registerFunction(procedure.code, functionDescription, functionArguments);
    }

    /**
     * Set functions for AI function calling
     * @param {object} args - the block's arguments
     * @param {string} args.PATTERN - function name pattern to match
     * @param {object} util - utility object provided by the runtime
     * @returns {string} - result message
     */
  }, {
    key: "useMatchedProcedures",
    value: function useMatchedProcedures(args, util) {
      var _this9 = this;
      var target = util.target;
      var codePattern = new RegExp(args.PATTERN.trim());
      var ai = this.getAI(target);
      var procedures = this.getUserProcedures(target).filter(function (proc) {
        return codePattern.test(proc.code);
      });
      if (procedures.length === 0) {
        return 'No matching functions found.';
      }
      ai.clearRegisteredFunctions();
      procedures.forEach(function (proc) {
        return _this9.registerFunction(target, proc);
      });
      return "Registered [\"".concat(procedures.map(function (proc) {
        return proc.code;
      }).join('", "'), "\"]");
    }

    /**
     * Update function call registry for AI.
     * This will re-register all user-defined functions.
     * @param {Target} target - the target to update the function registry
     * @returns {void}
     */
  }, {
    key: "updateFunctionRegistry",
    value: function updateFunctionRegistry(target) {
      var _this0 = this;
      var ai = this.getAI(target);
      ai.clearRegisteredFunctions();
      var procedures = this.getUserProcedures(target);
      procedures.forEach(function (proc) {
        _this0.registerFunction(target, proc);
      });
    }

    /**
     * Return result to AI for function calling of the last response.
     * @param {object} args - the block's arguments.
     * @param {string} args.RESULT - result to return
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - message indicating result is returned
     */
  }, {
    key: "returnResultToAI",
    value: function returnResultToAI(args, util) {
      var _this1 = this;
      var target = util.target;
      var ai = this.getAI(target);
      var result = args.RESULT;
      var blockId = util.thread.peekStack();
      var topBlockId = target.blocks.getTopLevelScript(blockId);
      var topBlock = target.blocks.getBlock(topBlockId);
      if (!topBlock || topBlock.opcode !== 'procedures_definition') {
        return 'Error: Not in a procedure definition block.';
      }
      var prototypeId = topBlock.inputs.custom_block.block;
      var prototype = target.blocks.getBlock(prototypeId);
      var procedureCode = prototype.mutation.proccode;
      var functionSpec = ai.getFunctionSpec(procedureCode);
      if (!functionSpec) {
        console.log("returnResultToAI: \"".concat(procedureCode, "\" is not registered."));
        return "\"".concat(procedureCode, "\" is not registered.");
      }
      var currentCall = util.thread.functionCall;
      if (!currentCall) {
        return 'No function call in progress.';
      }
      if (currentCall.name !== functionSpec.declaration.name) {
        console.log("returnResultToAI: \"".concat(functionSpec.declaration.name, "\" is not the current function call."));
        return "\"".concat(functionSpec.declaration.name, "\" is not the current function call.");
      }
      var stackFrame = util.stackFrame;
      if (stackFrame.functionCalls) {
        var callsToStart = stackFrame.functionCalls.filter(function (funcCall) {
          return funcCall.status === 'PENDING';
        });
        if (callsToStart.length > 0) {
          this.dispatchFunctionCalls(callsToStart, util);
          util.yield();
          return;
        }
        if (stackFrame.functionCalls.every(function (funcCall) {
          return funcCall.thread && _this1.runtime.threads.indexOf(funcCall.thread) === -1;
        })) {
          // All function calls are completed, exit this block
          this.cleanupStoppedFunctionCalls(stackFrame.functionCalls);
          console.log("\"function: ".concat(functionSpec.declaration.name, ", block: ").concat(procedureCode, "\", result: ").concat(result, ","));
          return;
        }
      }
      if (typeof currentCall.result === 'undefined') {
        currentCall.result = result;
        ai.returnFunctionResult(currentCall).then(function (_ref1) {
          var _stackFrame$functionC3;
          var _ref10 = _slicedToArray(_ref1, 2),
            response = _ref10[0],
            functionCalls = _ref10[1];
          stackFrame.functionCalls = stackFrame.functionCalls || [];
          (_stackFrame$functionC3 = stackFrame.functionCalls).push.apply(_stackFrame$functionC3, _toConsumableArray(functionCalls));
          if (response && response.text) {
            _this1.runtime.startHats('gai_whenResponseReceived', null, target);
          }
          stackFrame.isResultResponseReceived = true;
        }).catch(function (error) {
          console.error(error);
          return error.message;
        });
      }
      util.yield();
      return;
    }

    /**
     * Get embedding of content.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONTENT - content
     * @param {string} args.TASK_TYPE - task type
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - a Promise that resolves embedding
     */
  }, {
    key: "embeddingFor",
    value: function embeddingFor(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return 'API key is not set.';
      }
      var target = util.target;
      util.runtime;
      var ai = this.getAI(target);
      if (ai.isRequesting()) {
        util.yield();
        return;
      }
      var contentText = Cast.toString(args.CONTENT).trim();
      var content = interpretContentPartsText(contentText);
      var taskType = args.TASK_TYPE;
      return ai.requestEmbedding(content, taskType).then(function (embedding) {
        var jsonText = JSON.stringify(embedding);
        var result = jsonText.substring(1, jsonText.length - 1); // remove brackets
        return result;
      }).catch(function (error) {
        console.error("embeddingFor: ".concat(error.message));
        return '';
      });
    }

    /**
     * Calculate similarity of two vectors.
     * @param {object} args - the block's arguments.
     * @param {string} args.METRIC - metric {'dotProduct' | 'euclidean'}
     * @param {string} args.VECTOR_A - vector A
     * @param {string} args.VECTOR_B - vector B
     * @returns {number} - dot product
     */
  }, {
    key: "embeddingDistanceOf",
    value: function embeddingDistanceOf(args) {
      var metric = args.METRIC;
      var vectorA = String(args.VECTOR_A).split(',').map(function (s) {
        return parseFloat(s);
      });
      var vectorB = String(args.VECTOR_B).split(',').map(function (s) {
        return parseFloat(s);
      });
      if (vectorA.length !== vectorB.length) return 'error: not same length';
      if (vectorA.every(function (x) {
        return x === 0;
      }) || vectorB.every(function (x) {
        return x === 0;
      })) return 'error: zero vector';
      var result = '';
      switch (metric) {
        case 'dotProduct':
          result = dotProduct(vectorA, vectorB);
          break;
        case 'euclidean':
          result = euclideanDistance(vectorA, vectorB);
          break;
        default:
          console.error("embeddingDistanceOf: unknown metric ".concat(metric));
      }
      return result;
    }

    /**
     * Set API key and reset AI.
     * @param {object} args - the block's arguments.
     * @param {string} args.KEY - API key
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
  }, {
    key: "setApiKey",
    value: function setApiKey(args, util) {
      var apiKey = Cast.toString(args.KEY).trim();
      GeminiAdapter.setApiKey(apiKey);
      GeminiAdapter.removeAllAdapter();
      this.updateFunctionRegistry(util.target);
    }

    /**
     * Get API key.
     * @returns {string} - API key
      * @deprecated
     */
  }, {
    key: "apiKey",
    value: function apiKey() {
      var apiKey = GeminiAdapter.getApiKey();
      if (!apiKey) {
        return '';
      }
      var lastFourChars = apiKey.slice(-4);
      var maskedPortion = '*'.repeat(apiKey.length - 4);
      return maskedPortion + lastFourChars;
    }

    /**
     * Set base URL and reset AI.
     * @param {object} args - the block's arguments.
     * @param {string} args.URL - base URL
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - message
     */
  }, {
    key: "setBaseUrl",
    value: function setBaseUrl(args, util) {
      var baseUrl = Cast.toString(args.URL).trim();
      if (!baseUrl.startsWith('http://') && !baseUrl.startsWith('https://')) {
        return 'error: invalid URL';
      }
      GeminiAdapter.baseUrl = baseUrl;
      GeminiAdapter.removeAllAdapter();
      this.updateFunctionRegistry(util.target);
      return "set base URL: ".concat(baseUrl);
    }

    /**
     * Get base URL.
     * @returns {string} - base URL
     */
  }, {
    key: "baseUrl",
    value: function baseUrl() {
      return GeminiAdapter.baseUrl;
    }

    /**
     * Count tokens as request type.
     * @param {object} args - the block's arguments.
     * @param {string} args.CONTENT - content
     * @param {string} args.REQUEST_TYPE - request type {'generate' | 'chat'}
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<number>} - a Promise that resolves token count
     */
  }, {
    key: "countTokensAs",
    value: function countTokensAs(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return 'API key is not set.';
      }
      var target = util.target;
      var ai = this.getAI(target);
      if (ai.isRequesting()) {
        util.yield();
        return;
      }
      var contentText = Cast.toString(args.CONTENT);
      var content = interpretContentPartsText(contentText, target, this.runtime);
      var requestType = args.REQUEST_TYPE;
      return ai.countTokensAs(content, requestType).catch(function (error) {
        console.error(error);
        return error.message;
      });
    }

    /**
     * Set generative model code.
     * @param {object} args - the block's arguments.
     * @param {string} args.MODEL_CODE - model code
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - validation result message
     */
  }, {
    key: "setGenerativeModel",
    value: function setGenerativeModel(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      var modelCode = Cast.toString(args.MODEL_CODE).trim();
      if (ai.isRequesting()) {
        util.yield();
        return;
      }
      return ai.setGenerativeModel(modelCode).catch(function (error) {
        return "Error setting model: ".concat(error.message);
      });
    }

    /**
     * Get generative model code.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - model code
     */
  }, {
    key: "getGenerativeModel",
    value: function getGenerativeModel(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      return ai.modelCode.generative;
    }
    /**
     * Get generative model ID.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - model ID
     */
  }, {
    key: "getGenerativeModelID",
    value: function getGenerativeModelID(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return '';
      }
      var modelIndex = parseInt(args.MODEL_INDEX, 10);
      if (isNaN(modelIndex)) {
        return '';
      }
      if (modelIndex < 1) {
        return '';
      }
      var target = util.target;
      var ai = this.getAI(target);
      return ai.getGenerativeModelID(modelIndex - 1).then(function (modelID) {
        if (!modelID) {
          return '';
        }
        return modelID;
      });
    }

    /**
     * Get max generative model number.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {number} - max generative model number
     */
  }, {
    key: "getMaxGenerativeModelNumber",
    value: function getMaxGenerativeModelNumber(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return 0;
      }
      var target = util.target;
      var ai = this.getAI(target);
      return ai.getMaxGenerativeModelNumber();
    }

    /**
     * Set embedding model code.
     * @param {object} args - the block's arguments.
     * @param {string} args.MODEL_CODE - model code
     * @param {object} util - utility object provided by the runtime.
     * @returns {Promise<string>} - validation result message
     */
  }, {
    key: "setEmbeddingModel",
    value: function setEmbeddingModel(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      var modelCode = Cast.toString(args.MODEL_CODE).trim();
      if (ai.isRequesting()) {
        util.yield();
        return;
      }
      return ai.setEmbeddingModel(modelCode).catch(function (error) {
        return "Error setting model: ".concat(error.message);
      });
    }

    /**
     * Get embedding model code.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - model code
     */
  }, {
    key: "getEmbeddingModel",
    value: function getEmbeddingModel(args, util) {
      var target = util.target;
      var ai = this.getAI(target);
      return ai.modelCode.embedding;
    }

    /**
     * Get embedding model ID.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {string} - model ID
     */
  }, {
    key: "getEmbeddingModelID",
    value: function getEmbeddingModelID(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return '';
      }
      var modelIndex = parseInt(args.MODEL_INDEX, 10);
      if (isNaN(modelIndex)) {
        return '';
      }
      if (modelIndex < 1) {
        return '';
      }
      var target = util.target;
      var ai = this.getAI(target);
      return ai.getEmbeddingModelID(modelIndex - 1).then(function (modelID) {
        if (!modelID) {
          return '';
        }
        return modelID;
      });
    }

    /**
     * Get max embedding model number.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {number} - max embedding model number
     */
  }, {
    key: "getMaxEmbeddingModelNumber",
    value: function getMaxEmbeddingModelNumber(args, util) {
      if (!GeminiAdapter.getApiKey()) {
        return 0;
      }
      var target = util.target;
      var ai = this.getAI(target);
      return ai.getMaxEmbeddingModelNumber();
    }

    /**
     * Open dialog to input API key by user.
     * @param {string} [defaultApiKey=''] - default API key
     * @returns {Promise<string>?} - a Promise that resolves API key or null if canceled
     */
  }, {
    key: "openApiKeyDialog",
    value: function openApiKeyDialog() {
      var _this10 = this;
      var defaultApiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (this.apiKeyDialogOpened) {
        // prevent to open multiple dialogs
        return null;
      }
      this.apiKeyDialogOpened = true;
      var inputDialog = document.createElement('dialog');
      inputDialog.style.padding = '0px';
      var dialogFace = document.createElement('div');
      dialogFace.style.padding = '16px';
      inputDialog.appendChild(dialogFace);
      var label = document.createTextNode(formatMessage({
        id: 'gai.apiKeyDialog.message',
        default: 'set API key',
        description: 'label of API key input dialog for gemini'
      }));
      dialogFace.appendChild(label);
      // Dialog form
      var apiKeyForm = document.createElement('form');
      apiKeyForm.setAttribute('method', 'dialog');
      apiKeyForm.style.margin = '8px';
      apiKeyForm.addEventListener('submit', function (e) {
        e.preventDefault();
      });
      dialogFace.appendChild(apiKeyForm);
      // API select
      var apiKeyInput = document.createElement('input');
      apiKeyInput.setAttribute('type', 'text');
      apiKeyInput.setAttribute('id', 'apiKeyInput');
      apiKeyInput.setAttribute('size', '50');
      apiKeyInput.setAttribute('value', defaultApiKey ? defaultApiKey : '');
      apiKeyForm.appendChild(apiKeyInput);
      // Cancel button
      var cancelButton = document.createElement('button');
      cancelButton.textContent = formatMessage({
        id: 'gai.apiKeyDialog.cancel',
        default: 'cancel',
        description: 'cancel button on groupID input dialog for gemini'
      });
      cancelButton.style.margin = '8px';
      dialogFace.appendChild(cancelButton);
      // OK button
      var confirmButton = document.createElement('button');
      confirmButton.textContent = formatMessage({
        id: 'gai.apiKeyDialog.set',
        default: 'set',
        description: 'set button on API key input dialog for gemini'
      });
      confirmButton.style.margin = '8px';
      dialogFace.appendChild(confirmButton);
      dialogFace.appendChild(document.createElement('br'));
      dialogFace.appendChild(document.createTextNode(' ('));
      var getApiKeyLink = document.createElement('a');
      getApiKeyLink.textContent = formatMessage({
        id: 'gai.apiKeyDialog.howToGetApiKey',
        default: 'get API key',
        description: 'link to get API key for gemini'
      });
      getApiKeyLink.setAttribute('href', 'https://ai.google.dev/gemini-api/docs/api-key');
      getApiKeyLink.setAttribute('target', '_blank');
      dialogFace.appendChild(getApiKeyLink);
      dialogFace.appendChild(document.createTextNode(')'));
      return new Promise(function (resolve) {
        // Add onClick action
        var confirmed = function confirmed() {
          var inputValue = apiKeyInput.value.trim();
          resolve(inputValue);
        };
        confirmButton.onclick = confirmed;
        var canceled = function canceled() {
          resolve(null);
        };
        cancelButton.onclick = canceled;
        inputDialog.addEventListener('keydown', function (e) {
          if (e.code === 'Enter') {
            confirmed();
          }
          if (e.code === 'Escape') {
            canceled();
          }
        });
        document.body.appendChild(inputDialog);
        inputDialog.showModal();
      }).finally(function () {
        document.body.removeChild(inputDialog);
        _this10.apiKeyDialogOpened = false;
      });
    }

    /**
     * Ask user to input API key.
     * @param {object} args - the block's arguments.
     * @param {object} util - utility object provided by the runtime.
     * @returns {void}
     */
  }, {
    key: "askApiKey",
    value: function askApiKey(args, util) {
      var _this11 = this;
      if (this.apiKeyDialogOpened) {
        util.yield();
        return;
      }
      var prevApiKey = GeminiAdapter.getApiKey();
      return this.openApiKeyDialog(prevApiKey).then(function (apiKey) {
        if (apiKey === null) {
          // canceled
          return 'canceled by user';
        }
        if (apiKey === '') {
          // empty key
          return 'API key is empty';
        }
        if (apiKey === prevApiKey) {
          // same key, no need to validate again
          return 'API key unchanged';
        }

        // Validate the new API key
        return GeminiAdapter.validateApiKey(apiKey).then(function (validation) {
          if (validation.valid) {
            GeminiAdapter.setApiKey(apiKey);
            GeminiAdapter.removeAllAdapter();
            _this11.updateFunctionRegistry(util.target);
            return 'API key validated and set successfully';
          }
          return "API key validation failed: ".concat(validation.error);
        }).catch(function (error) {
          return "API key validation error: ".concat(error.message);
        });
      });
    }
  }], [{
    key: "formatMessage",
    set:
    /**
     * A translation object which is used in this class.
     * @param {FormatObject} formatter - translation object
     */
    function set(formatter) {
      formatMessage = formatter;
      if (formatMessage) setupTranslations();
    }

    /**
     * @return {string} - the name of this extension.
     */
  }, {
    key: "EXTENSION_NAME",
    get: function get() {
      return formatMessage({
        id: 'gai.name',
        default: 'GAI',
        description: 'name of google generative AI extension'
      });
    }

    /**
     * @return {string} - the ID of this extension.
     */
  }, {
    key: "EXTENSION_ID",
    get: function get() {
      return EXTENSION_ID;
    }

    /**
     * URL to get this extension.
     * @type {string}
     */
  }, {
    key: "extensionURL",
    get: function get() {
      return extensionURL;
    }

    /**
     * Set URL to get this extension.
     * The extensionURL will be changed to the URL of the loading server.
     * @param {string} url - URL
     */,
    set: function set(url) {
      extensionURL = url;
    }
  }]);
}();

export { GeminiBlocks as blockClass, entry };
//# sourceMappingURL=gai.mjs.map
