import csv
import json

def parse_csv_to_json(csv_file, json_file):
    with open(csv_file, 'r') as file:
        reader = csv.DictReader(file)
        rows = [row for row in reader]

    with open(json_file, 'w') as file:
        json.dump(rows, file)
        
def main():
    file = input("Enter the path of the file you want to parse: ")
    jsonFile = input("Enter the name of the new json file with asociated path: ")
    parse_csv_to_json(file, jsonFile)
    
main()