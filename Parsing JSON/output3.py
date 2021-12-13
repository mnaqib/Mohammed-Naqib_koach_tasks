import json


def get_num(string):
    lis = string.split("_")
    return int(lis[1])


f = open("koach_colleges_JSON3.json")

dataset = list(json.load(f))

output = sorted(dataset, key=lambda data: get_num(data["clg_code"]))
with open("outpu3.json", "w") as file:
    file.write(json.dumps(output, indent=4))

f.close()
