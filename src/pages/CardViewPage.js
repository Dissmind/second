import React from 'react'
import { Layout } from '../componets/Layout/Layout.js'
import CardView from '../componets/CardView/CardView.js'


export const CardViewPage = (props) => (
    <Layout backButton={true}>
        <CardView
            id={props.match.params.id}
        />
    </Layout>
)