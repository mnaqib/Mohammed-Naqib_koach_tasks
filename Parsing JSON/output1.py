import json


def compute(dataset):
    count = 0
    for data in dataset:
        if data["status"] == True:
            count += 1
    return count


# Opening JSON files
f1 = open("koach_students_JSON1.json")
f2 = open("koach_groups_JSON2.json")
f3 = open("koach_colleges_JSON3.json")

# returns JSON object as
# a dictionary
data1 = json.load(f1)
data2 = json.load(f2)
data3 = json.load(f3)

# output dictonary
output = {}

# College data
output["total_active_clgs"] = compute(data3)
output["total_inactive_clgs"] = len(data3) - output["total_active_clgs"]
# groups data
output["total_active_grps"] = compute(data2)
output["total_inactive_grps"] = len(data2) - output["total_active_grps"]
# students data
output["total_active_stds"] = compute(data1)
output["total_inactive_std"] = len(data1) - output["total_active_stds"]


with open("outpu1.json", "w") as file:
    file.write(json.dumps(output, indent=4))

# Closing file
f1.close()
f2.close()
f3.close()
