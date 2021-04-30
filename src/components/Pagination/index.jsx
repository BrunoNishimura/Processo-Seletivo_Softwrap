import { Pagination } from 'react-bootstrap';
import { StyledPagination } from './styles';

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
};

const PaginationBasic = () => {
  return (
    <div>
      <StyledPagination>
        <Pagination variant="dark" size="sm">{items}</Pagination>
      </StyledPagination>
    </div >
  )
}
export default PaginationBasic;