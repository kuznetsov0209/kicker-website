import React from "react";
import styled from "@emotion/styled";

const Container = styled.div``;

const Head = styled.div`
  display: flex;
  margin-bottom: 16px;

  @media screen and (max-width: 1232px) {
    margin-left: 46px;
  }
`;

const Body = styled.div``;

const Row = styled.div`
  position: relative;
  display: flex;
  height: 80px;
  margin-bottom: 6px;
  color: #ffffff;
  font-size: 16px;
`;

const RowEnumeration = styled.div`
  position: absolute;
  right: calc(100% + 16px);
  align-items: center;
  width: 30px;
  display: flex;
  height: inherit;
  opacity: 0.1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1232px) {
    position: relative;
    right: unset;
    margin-right: 16px;
  }
`;

const RowBody = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  padding: 0 6px;
  border-radius: 4px;
  background-color: #262525;
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
              <RowEnumeration>{i + 1}</RowEnumeration>

              <RowBody>
                {columns.map((column, j) => (
                  <Cell key={j + 1} style={column.style}>
                    {column.render ? column.render(row, i) : row[column.name]}
                  </Cell>
                ))}
              </RowBody>
            </Row>
          ))}
        </Body>
      </Container>
    );
  }
}

export default Table;
