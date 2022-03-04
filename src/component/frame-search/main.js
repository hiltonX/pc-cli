/*
 * @description 列表页搜索项
 */
import React from 'react'
import { action } from 'mobx'
import { observer} from 'mobx-react'
import { Button, Select, Input, DatePicker, Form, Row, Col } from 'antd'

const { RangePicker } = DatePicker
const { Option } = Select

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

@observer
class FrameSearch extends React.Component {
  formRef = React.createRef()

  /**
    * @Author 不悔
    * @Date 2020-09-04
    * @desrc 重置搜索条件，获取搜索结果列表
    * @export
    * @param {*}
  */
  @action resetSearchParams = () => {
    this.formRef.current.resetFields()
    this.props.getList(this.formRef.current)
  }

  render() {
    const {filterList=[], confirmText, showReset=true} = this.props

    return (
      <div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          ref={this.formRef}
          {...layout}
          onSubmit={this.handleSubmit}
        >
          <Row gutter={24}>
          {
            filterList.map((item, index) => {
              if (item.type === 'text') {
                return (
                  <Col span={8} key={index}>
                    <Form.Item 
                      colon={false}
                      {...item}
                    >
                      <Input 
                        placeholder={`请输入${item.label}`} 
                        allowClear autoComplete="off" 
                        {...item.props}
                        onInput={(e) => {
                          const {onInput} = item.props || {}
                          const {value=''} = e.target
                          onInput && onInput(value, this.formRef.current)
                        }}
                      />
                    </Form.Item>
                  </Col>
                )
              }

              if (item.type === 'select') {
                const {optionValue='value', optionLabel='text'} = item
                return (
                  <Col span={8} key={index}>
                    <Form.Item 
                      colon={false}
                      {...item}
                    >
                      <Select
                        className="mr8"
                        placeholder={`请选择${item.label}`}
                        allowClear="true"
                        showSearch
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        {...item.props}
                      >
                        {item.option.map(item => <Option key={item[optionValue]} value={item[optionValue]} title={item[optionLabel]}>{item[optionLabel]}</Option>)}
                      </Select>
                    </Form.Item>
                  </Col>
                )
              }

              if (item.type === 'time') {
                return (
                  <Col span={8} key={index}>
                    <Form.Item 
                      colon={false}
                      {...item}
                    >
                      <div>
                        <RangePicker 
                          {...item.props}
                          onChange={(e, dataString) => {
                            this.formRef.current.setFieldsValue({
                              'time': dataString
                            })
                          }}
                        />
                      </div>
                    </Form.Item>
                  </Col>
                )
              }
            })
          }
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button 
                type="primary" 
                onClick={e => {
                  this.props.getList(this.formRef.current)
                }}
              >
                {confirmText || '查询'}
              </Button>
              {showReset && <Button 
                style={{ marginLeft: 8 }} 
                onClick={e => this.resetSearchParams()}
              >
                重置
              </Button>}
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default FrameSearch
