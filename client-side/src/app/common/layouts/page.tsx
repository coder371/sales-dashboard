import React, { Children } from 'react'
import {PageHead, Header} from '../components/templates'
import {Container} from '@mui/material';
export function Page({children,title = 'Title'}) {
  return (
    <>
      <Header/>
      <div className="page text-right main-content-wrap">
        <PageHead pageName={title}/>
        <div className="separator-breadcrumb border-top"></div>
        <Container className='py-4' >
          {children}
        </Container>
      </div>
    </>
  )
}