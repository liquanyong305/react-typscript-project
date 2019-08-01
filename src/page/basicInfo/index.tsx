import React,{ Component } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { IBasicInfo, defaultBasicInfo } from './entity/stateType'
import Select from 'react-select';
import axios from 'axios';

interface BasicInfoPropType extends RouteComponentProps<any>{
}

interface BasicInfoStateType{
    basicInfo: IBasicInfo,
    selectedOption:{value: string, label: string}
}

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

export default class BasicInfo extends Component<BasicInfoPropType, BasicInfoStateType>{
    constructor(props: BasicInfoPropType){
        super(props);
        this.state= {
            basicInfo : defaultBasicInfo,
            selectedOption :{value: '', label: '選択'}
        }
    }
    onSubmit = () => {
        this.props.history.push('/')
    }
    handleChange = (selectedOption: any) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };
    handleInputChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        const target = event.target;
        const { name, value } = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const value = target.value;
        // const name = target.name;
        let errors = this.state.basicInfo.errors;
        const validEmailRegex =  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch (name) {
            case 'name1': 
              errors.name1 = 
                value.length < 5
                  ? 'Full Name must be 5 characters long!'
                  : '';
              break;
            case 'name2': 
              errors.name2 = 
                validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
              break;
            case 'name3': 
              errors.name3 = 
                value.length < 8
                  ? 'Password must be 8 characters long!'
                  : '';
              break;
            default:
              break;
        }
        const basicInfoInput: IBasicInfo  = Object.assign({}, this.state.basicInfo, {[target.name]: target.value,errors:errors});
        

        this.setState({ basicInfo: basicInfoInput});
    }
    render(){
        const { basicInfo, selectedOption } = this.state;
        return (
            <div className="content">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="card">
                    <div className="header">
                        <h2>情報入力</h2>
                    </div>
                    <div className="body">
                      <form className="form-horizontal">
        
                        <div className="row clearfix">
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <div className="form-group text-center">
                                    <span className="text-danger" id="validErrorMsg"></span>
                                </div>
                            </div>
                            <div className="control-label">
                            </div>
                        </div>
        
                        <div className="row clearfix">
                            <div className="col-lg-2 col-md-2 col-sm-1 col-xs-1 form-control-label">
                                <label htmlFor="entity">Entity</label>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <div className="form-group">
                                    <input type="text" id="entity" name="entity" className="form-control" placeholder="" value="NSC" disabled />
                                </div>
                            </div>
                        </div>
        
                        <div className="row clearfix">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-control-label">
                                <label htmlFor="categopryCd">業種</label><span className="required_item">*</span>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                                <div className="form-group">
                                <Select
                                    name="categopryCd"
                                    value={selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                                <span className="text-danger">{basicInfo.errors.categopryCd}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row clearfix">
                          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-control-label">
                            <label htmlFor="name1">顧客名</label><span className="required_item">*</span>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                            <div className="form-group">
                                <input type="text"
                                    name="name1"
                                    className="form-control"
                                    value={basicInfo.name1}
                                    onChange={this.handleInputChange} 
                                    placeholder=""
                                    maxLength={35}
                                />
                                <p className="text-danger">{basicInfo.errors.name1}</p>
                            </div>
                          </div>
                          <div className="control-label">
                            <label className="align-middle"><strong>半角35文字</strong></label>
                          </div>
                        </div>
                        <div className="row clearfix">
                          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-control-label">
                            <label htmlFor="name2">顧客名2</label>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                            <div className="form-group">
                                <input type="text"
                                    name="name2"
                                    className="form-control"
                                    value={basicInfo.name2}
                                    onChange={this.handleInputChange} 
                                    placeholder=""
                                    maxLength={35}
                                />
                                <span className="text-danger">{basicInfo.errors.name2}</span>
                            </div>
                          </div>
                          <div className="control-label">
                            <label htmlFor=""><strong>半角35文字</strong></label>
                          </div>
                        </div>
                        <div className="row clearfix">
                          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 form-control-label">
                            <label htmlFor="name3">顧客名（英字3）</label>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                            <div className="form-group">
                                <input type="text"
                                    name="name3"
                                    className="form-control"
                                    value={basicInfo.name3}
                                    onChange={this.handleInputChange} 
                                    placeholder=""
                                    maxLength={35}
                                />
                                <span className="text-danger">{basicInfo.errors.name3}</span>
                            </div>
                          </div>
                          <div className="control-label">
                            <label htmlFor=""><strong>半角35文字</strong></label>
                          </div>
                        </div>
                        <div className="row clearfix">
                          <div className="col-lg-12 col-md-12 text-right ">
                            <button type="submit" id="basicInfoNextBtn" className="btn btn-red m-t-15" onClick={this.onSubmit}>Next</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}