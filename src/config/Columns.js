import { textFilter, selectFilter } from 'react-bootstrap-table2-filter';

/**
 * Dropdown select options for adding a new expense.
 */
const categoryOptions = {
    0: 'Utilities',
    1: 'Groceries',
    2: 'Household',
    3: 'Restaurants',
    4: 'Clothing',
    5: 'Entertainment',
    6: 'Hobbies',
    7: 'Work',
    8: 'Insurance',
    9: 'Savings',
    10: 'Other',
};

/**
 * Expense table column configuration.
 */
export const columns = [{
    dataField: 'date',
    text: 'Date',
    filter: textFilter()
}, {
    dataField: 'category',
    text: 'Category',
    formatter: cell => categoryOptions[cell],
    filter: selectFilter({
        options: categoryOptions
    })
}, {
    dataField: 'description',
    text: 'Description',
    filter: textFilter()
}, {
    dataField: 'amount',
    text: 'Amount',
    filter: textFilter()
}];
