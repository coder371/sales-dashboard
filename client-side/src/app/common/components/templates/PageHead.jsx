import React from 'react'
export function PageHead ({pageName}) {
    return (
        <div className="breadcrumb">
            <div className="flex">
                <h1 className="mr-2">Xproject</h1>
                <ul>
                    <li>
                        {pageName}
                    </li>
                </ul>
            </div>
        </div>
    )
}
