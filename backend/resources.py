import json

# Read LinkedIn profile
try:
    with open("./data/linkedin.md", "r", encoding="utf-8") as f:
        linkedin = f.read()
except FileNotFoundError:
    linkedin = "LinkedIn profile not available"

# Read other data files
with open("./data/summary.txt", "r", encoding="utf-8") as f:
    summary = f.read()

with open("./data/style.txt", "r", encoding="utf-8") as f:
    style = f.read()

with open("./data/facts.json", "r", encoding="utf-8") as f:
    facts = json.load(f)
