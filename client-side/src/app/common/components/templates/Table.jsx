import React, { useEffect, useState } from 'react'
import { useTable, usePagination } from 'react-table'


function Table({ columns, data,pageIndexNum = 0,setPageIndexNum}) {
    const {getTableProps,getTableBodyProps,headerGroups,prepareRow,page,canPreviousPage,canNextPage,pageOptions,pageCount,gotoPage,nextPage,previousPage,setPageSize,state: { pageIndex, pageSize }} = useTable({columns,data,initialState: { pageIndex: pageIndexNum },},usePagination)
    console.log(pageIndexNum,pageIndex);
    useEffect(() =>{
        setPageIndexNum(pageIndex)
    },[pageIndex])

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup, i) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                    {headerGroup.headers.map((column, i) => (
                        <th key={i} {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()} key={i}> 
                        {row.cells.map(cell => {
                        return <>
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        </>
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
            <div className="pagination">
                    <div className='main_pagination'>
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                        {'<<'}
                    </button>{' '}
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'<'}
                    </button>{' '}
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        {'>'}
                    </button>{' '}
                    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                        {'>>'}
                    </button>{' '}
                        <span>
                            Page{' '}
                            <strong>
                            {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
                        </span>
                    </div>
                    <select
                        className='btn_sec'
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                        {pageSize}
                        </option>
                    ))}
                    </select>
            </div>
        </>
    )
}

function ArticlesList({columns, data,setPageIndexNum,pageIndexNum}) {
    // const columns = React.useMemo(
    //     () => [
    //         {
    //             Header: 'م',
    //             accessor: 'num', // accessor is the "key" in the data
    //         },
    //         {
    //             Header: 'اسم المقال',
    //             accessor: 'title',
    //         },
    //         {
    //             Header: 'القسم',
    //             accessor: 'category',
    //         },
    //         {
    //             Header: 'تاريخ الإضافة',
    //             accessor: 'date',
    //         },
    //     ],
    //     []
    // )
    // const data = React.useMemo(
    //     () => [
    //         {
    //             num: '1',
    //             title: 'مقال هنا اسم مقال',
    //             category:'فيزياء',
    //             date: '10/5/2021',
    //         },
    //         {
    //             num: '2',
    //             title: 'مقال هنا اسم مقال',
    //             category:'فيزياء',
    //             date: '10/5/2021',
    //         },
    //     ],
    //     []
    // )
    return (
        <Table
            columns={columns} 
            data={data} 
            setPageIndexNum={setPageIndexNum}
            pageIndexNum={pageIndexNum}

        />
    )
}

export default ArticlesList