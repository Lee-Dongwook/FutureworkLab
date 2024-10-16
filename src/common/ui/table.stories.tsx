import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './Table'; // Table 컴포넌트 경로를 맞춰주세요.

const meta: Meta<typeof Table> = {
  title: 'components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// 기본 테이블 구성
export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>Example Table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Header 1</TableHead>
          <TableHead>Header 2</TableHead>
          <TableHead>Header 3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Row 1, Cell 1</TableCell>
          <TableCell>Row 1, Cell 2</TableCell>
          <TableCell>Row 1, Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2, Cell 1</TableCell>
          <TableCell>Row 2, Cell 2</TableCell>
          <TableCell>Row 2, Cell 3</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
          <TableCell>Footer 3</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

