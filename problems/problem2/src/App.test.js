import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe("<App />", () => {
  it("change document.title when counter increase", () => {
    render( <App /> );
    const button = screen.getByText("증가하기");
    
    expect(document.title).toBe('현재 카운터 숫자: 0');

    fireEvent.click(button);

    expect(document.title).toBe('현재 카운터 숫자: 1');
  });

  it("change document.title when counter decrease", () => {
    render( <App /> );
    const button = screen.getByText("감소하기");
    
    expect(document.title).toBe('현재 카운터 숫자: 0');

    fireEvent.click(button);
    
    expect(document.title).toBe('현재 카운터 숫자: -1');
  });
})