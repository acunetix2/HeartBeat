import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LogsTable = ({ logs }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Timestamp</TableHead>
          <TableHead>Source</TableHead>
          <TableHead>Event</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs.map((log, idx) => (
          <TableRow key={idx}>
            <TableCell>{log.timestamp}</TableCell>
            <TableCell>{log.source}</TableCell>
            <TableCell>{log.event}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default LogsTable;
