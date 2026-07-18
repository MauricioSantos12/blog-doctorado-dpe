import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

interface DataTableProps {
  caption?: string
  headers: string[]
  rows: string[][]
}

export default function DataTable({ headers, rows }: DataTableProps) {
  return (
    <TableContainer
      borderRadius="xl"
      border="1px solid"
      borderColor="brand.light"
      bg="white"
      boxShadow="sm"
    >
      <Table size="sm" variant="simple">
        <Thead bg="brand.deep">
          <Tr>
            {headers.map((h) => (
              <Th key={h} color="white" borderColor="whiteAlpha.400" fontSize="xs" py={3}>
                {h}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, i) => (
            <Tr key={i} _odd={{ bg: 'brand.pale' }}>
              {row.map((cell, j) => (
                <Td
                  key={j}
                  color="brand.ink"
                  borderColor="brand.light"
                  fontWeight={j === 0 ? '700' : '400'}
                  whiteSpace="normal"
                  verticalAlign="top"
                  minW="140px"
                >
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
