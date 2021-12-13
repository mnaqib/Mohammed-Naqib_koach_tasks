import json


def merge_lists(listdict1, listdict2, joinkey):
    mergedlist = listdict1
    for i in range(len(listdict1)):
        for j in range(len(listdict2)):
            if listdict1[i][joinkey] == listdict2[j][joinkey]:
                for keys in listdict2[j].keys():
                    mergedlist[i][keys] = listdict2[j][keys]
    return mergedlist


f1 = open("koach_students_JSON1.json")
f2 = open("koach_groups_JSON2.json")
f3 = open("koach_colleges_JSON3.json")

data1 = list(json.load(f1))
data2 = list(json.load(f2))
data3 = list(json.load(f3))

output = merge_lists(data1, data2, "grp_id")
output = merge_lists(output, data3, "clg_id")

output = [
    {
        k: v
        for k, v in x.items()
        if k in ["std_name", "std_code", "std_id", "status", "clg_name", "grp_name"]
    }
    for x in output
]

with open("outpu2.json", "w") as file:
    file.write(json.dumps(output, indent=4))


f1.close()
f2.close()
f3.close()
