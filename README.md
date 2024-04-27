# weekly-availabilities-summary

Quickly get a summary of everyone's availability, provided you have a list of availabilities in [`weekly-availabilities`](https://github.com/domdomegg/weekly-availabilities) format (e.g. `M07:30 M12:30, M22:00 T01:00, F07:30 F12:30`).

## Usage

1. Clone this repo
2. Run `npm install`
3. Paste the availabilities into `availabilities.txt`
   (You can usually do this directly from Airtable or Google Sheets)
4. Run `npm start`. The output will be on your terminal.

## Example

`availabilities.txt`

```
T04:00 T13:00, F00:00 F06:00
M09:30 M18:30, T09:30 T18:30
T10:30 T15:30, R23:00 F02:00
```

Output of `npm start`:

```
M09:30 M18:30: 1
T04:00 T09:30: 1
T09:30 T10:30: 2
T10:30 T13:00: 3
T13:00 T15:30: 2
T15:30 T18:30: 1
R23:00 F00:00: 1
F00:00 F02:00: 2
F02:00 F06:00: 1
```

## Contributing

Pull requests are welcomed on GitHub! To get started:

1. Install Git and Node.js
2. Clone the repository
3. Install dependencies with `npm install`
4. Build with `npm run build`
