import styled from "styled-components";


export const TableWrapper = styled.div`
    margin: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TableHeader = styled.th`
    background-color: #4CAF50;
    color: white;
    padding: 12px;
    text-align: left;
    border-bottom: 2px solid #ddd;
`;

export const TableCell = styled.td`
    padding: 12px;
    border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }

    &:hover {
        background-color: #ddd;
    }
`;

