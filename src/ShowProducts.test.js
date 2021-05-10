import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ShowProducts from './ShowProducts';
import { screen } from '@testing-library/dom'


//רינדור של הקומפוננטה פעמיים - פעם אחת עם קטגוריה שבה ם מוצרים רבים,
test('renders too much product message', () => {
    const { getByText } = render(<ShowProducts category={"girl"} />);
    expect(getByText('too much product')).toBeInTheDocument();
});

// ופעם אחת עם קטגוריה שבה מעט מוצרים
test('renders little products message', () => {
    render(<ShowProducts category={"shoes"} />);
    const message = screen.queryByText('too much product');
    expect(message).toBeNull();
});

//יש לבדוק שנוצרו אלמנטים של מוצרים כמספר הפריטים שהיו. אמורים 
test('should equal to category', () => {
    const { container } = render(<ShowProducts category={"shoes"} />);
    const count = ShowProducts.count;
    expect(container.querySelectorAll("li").length === count);
});

//. יש להוסיף בדיקה שכפתור זה עובד כראוי
test('Hide expensive items', () => {
    const { getByText, container } = render(<ShowProducts category={"boy"} />);
    fireEvent.click(getByText("Hide expensive items more then 30"));
    const count = ShowProducts.count;
    expect(container.querySelectorAll("li").length === count);
});






