import React from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import Header from 'components/Header'
import TextListContainer from 'containers/TextListContainer'
import TextDetailContainer from 'containers/TextDetailContainer'

import styles from './App.css'
import utilStyles from 'css/util.css'

const App = props => {
    // const interfaceClasses = styles.interface + ' ' + 'flex';
    return (
        <div className={classnames(styles.container, utilStyles.flex, utilStyles.flexColumn)}>
            <Header/>
            <div className={classnames(styles.interface, utilStyles.flex)}>
                <TextListContainer />
                <TextDetailContainer />
            </div>
        </div>
    )
};

export default App;
