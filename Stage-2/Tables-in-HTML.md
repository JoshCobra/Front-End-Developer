# How to Create Tables in HTML

To create tables in HTML, you use the `<table>` element along with other related elements that define the structure of rows and cells. Here’s a breakdown of the main elements used for tables:

The [`table.html` Example](/Stage-2/documents/table-html/tables.html)

### Basic Table Elements:
1. **`<table>`**: Defines the table.
2. **`<tr>`**: Defines a table row.
3. **`<th>`**: Defines a header cell (table header).
4. **`<td>`**: Defines a standard cell (table data).

### Example of a Basic Table:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Table Example</title>
</head>
<body>

<table border="1"> <!-- The border attribute creates visible borders for table and cells -->
    <thead> <!-- Table header section -->
        <tr>
            <th>First Name</th> <!-- Table header cell -->
            <th>Last Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody> <!-- Table body section -->
        <tr>
            <td>John</td> <!-- Table data cell -->
            <td>Doe</td>
            <td>28</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>Smith</td>
            <td>32</td>
        </tr>
    </tbody>
    <tfoot> <!-- Table footer section -->
        <tr>
            <td colspan="3">Table Footer</td> <!-- Spanning 3 columns -->
        </tr>
    </tfoot>
</table>

</body>
</html>
```

### Key Elements:
`<thead>`: Groups header rows.

`<tbody>`: Groups the body of the table.

`<tfoot>`: Groups the footer rows (optional).

`border="1"`: Adds a border to the table and its cells.

#### Example Output:

| First Name    | Last Name     |  Age  |
| ------------- |:-------------:| -----:|
| Josh          | Doe           | 28    |
| Mary          | Smith         |   26  |

The footer will contain the text "Table Footer" spanning across all three columns.

## Advanced Table Features:

- Spanning Columns and Rows:

    - `colspan`: Used to make a cell span multiple columns.
    - `rowspan`: Used to make a cell span multiple rows.

```html
<tr>
    <td colspan="2">Spans across 2 columns</td>
    <td>Cell 3</td>
</tr>
Adding a Caption:
<caption>: Provides a title or caption for the table.
html
Copiar código
<table>
    <caption>Employee Information</caption>
    ...
</table>
```
