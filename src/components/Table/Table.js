import React from "react";
import styled from "@emotion/styled";

const Container = styled.div``;

const Head = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Body = styled.div``;

const Row = styled.div`
  display: flex;

  padding: 0 6px;
  height: 80px;
  border-radius: 4px;
  background-color: #262525;
  margin-bottom: 6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
`;

const Cell = styled.div`
  flex-shrink: 0;
  padding: 0 6px;
`;

const CellHeader = styled(Cell)`
  color: #ffffff;
  opacity: 0.7;
  font-size: 12px;
  font-weight: 500;
`;

class Table extends React.PureComponent {
  render() {
    const { columns = [] } = this.props;
    const { data = [] } = this.props;

    return (
      <Container>
        <Head>
          {columns.map((column, index) => (
            <CellHeader key={column.name} style={column.style}>
              {column.label}
            </CellHeader>
          ))}
        </Head>
        <Body>
          {data.map((row, i) => (
            <Row key={i}>
              {columns.map((column, j) => (
                <Cell key={j} style={column.style}>
                  {column.render ? column.render(row, i) : row[column.name]}
                </Cell>
              ))}
            </Row>
          ))}
        </Body>
      </Container>
    );
  }
}

export default Table;
