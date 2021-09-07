import React from 'react'

import { List, Picker, Button } from 'antd-mobile'
import { createForm } from 'rc-form'

import Frame from '../../frame'

class Project extends React.Component {

  render() {
    return (
      <Frame title="项目查询">
        <div className="page-customer mt52 pl24 pr24">
          <List>
            <Picker 
              data={[
                {
                  label: '2013',
                  value: '2013',
                },
                {
                  label: '2014',
                  value: '2014',
                },
              ]} 
              cols={1} 
              extra="请选择所属公司"
            >
              <List.Item arrow="horizontal">所属公司</List.Item>
            </Picker>
          </List>
          <Button type="primary" className="mt52">
            查询
          </Button>
        </div>
      </Frame>
    )
  }

}

const SearchForm = createForm()(Project)
export default SearchForm