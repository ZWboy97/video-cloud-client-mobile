import React, { Component } from 'react';
import './search.less';
import { SearchBar } from 'antd-mobile';
class Search extends Component {

    render() {
        return (
            <div className="search">
                <SearchBar placeholder="请输入关键词" maxLength={8} />
            </div>
        )
    }
}

export default Search