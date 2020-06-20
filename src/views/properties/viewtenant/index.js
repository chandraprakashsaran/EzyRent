import React, { Component } from "react";
import { TouchableOpacity, View, Image, ImageBackground, Text,SafeAreaView, ScrollView,ActivityIndicator,Alert } from "react-native";
import Svg, { Path } from "react-native-svg";
import NavigationService from '../../../navigation/NavigationService';
import Timeline from 'react-native-timeline-flatlist'
import styles from './style';
import { ThemeContext, theme } from '../../../theme';
import {
    NAVIGATION_DETAIL_PROPERTIES_OWNER_VIEW_PATH,
    NAVIGATION_MORE_TRANSACTION_PAYMENT_CONFIRMATION_VIEW_PATH,
    NAVIGATION_PROPERTIES_TENANTS_VIEW_PATH
  } from '../../../navigation/routes';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getPropertyById,tenantSubmissionOnProperty } from '../../../actions';
import { EzyRent } from '../../../ezyrent';   
class ViewPropertyTenant extends React.Component {
    static contextType = ThemeContext;
    constructor(props){
      super();
      this.state ={
        property:{}
      }
    }
    UNSAFE_componentWillMount(){
        const {navigation,getPropertyById} = this.props
        const property = navigation.getParam("property");
        this.setState({property})
        getPropertyById(property.id);
    }
    goToPropertyOwnerDetail(landlord_id){
        NavigationService.navigate(NAVIGATION_DETAIL_PROPERTIES_OWNER_VIEW_PATH,{landlord_id})
    }

    goToPrevious(){
        const { navigation } = this.props
        const backscreen = navigation.getParam('goBack');
        if(backscreen){
          NavigationService.navigate(backscreen);
        } else{
            NavigationService.goBack()
        }
      }
  
      renderHeader(theme){
        return(
          <View style={styles.headerContainer(theme)}>
            <View style={styles.headerContext}>
              <TouchableOpacity onPress={()=>this.goToPrevious()} style={styles.backscreen}>
                <Image style={styles.backscreen} resizeMode={'stretch'} source={require('../../../assets/images/back-white.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
        )
    }

    renderPayPeriod(period){
      switch(period){
        case "1":
          return "Week";
          break;
        case "2":
          return "Bi Week";
          break;
        case "3":
          return "Month";
          break;
        case "4":
          return "Year";
          break;
      }
    }

    renderInfoTimeline(value){
        return(
            <Text style={styles.payTime(theme)}>You paid rent of <Text style={{color:theme.colors.primaryTitleColor,fontWeight:'bold'}}>INR 25000</Text> for this property</Text>
        )
    }
    PayRent(property){
        NavigationService.navigate(NAVIGATION_MORE_TRANSACTION_PAYMENT_CONFIRMATION_VIEW_PATH,{property,goBack:NAVIGATION_PROPERTIES_TENANTS_VIEW_PATH})
      }

      AcceptProperty(item){
        const {tenantSubmissionOnProperty,customer} = this.props
        tenantSubmissionOnProperty(item.id,"A",customer);
        NavigationService.goBack();
      }
    
      RejectProperty(item){
        const {tenantSubmissionOnProperty,customer,} = this.props
        tenantSubmissionOnProperty(item.id,"R",customer);
        NavigationService.goBack();
      }
    
    confirmProperty(property_currentItem){
        Alert.alert(
            "Are you sure to Accept?",
          "",
          [
            {
              text: "REJECT",
              onPress: () => this.RejectProperty(property_currentItem),
              style: "cancel"
            },
            { text: "ACCEPT", onPress: () => this.AcceptProperty(property_currentItem) }
          ],
          { cancelable: false }
        );
    }

    renderFastImage(property_image){
      if(property_image && property_image !=""){
        return {uri:`${EzyRent.getMediaUrl()}${property_image}`}
      }
      return require("../../../assets/images/building_placehoder.jpg");
    }

    render(){
        const theme = this.context;
        const {property_loading,property_currentItem} = this.props;
        const {property} = this.state
        if(property_loading || !Object.keys(property_currentItem).length){
            return (<View style={{alignSelf:'center',justifyContent:'center',width:'100%',height:'100%'}}><ActivityIndicator color={theme.colors.secondry} size={'large'} /></View>)
          }
          console.log("property_currentItem",JSON.stringify(property_currentItem))
        return (
            <ImageBackground style={{width:'100%',height:'100%'}}
             resizeMode={'cover'} imageStyle={{width:'100%',height:300}} 
             //source={{uri:`${EzyRent.getMediaUrl()}${property_currentItem.property_image}`}}
             source={this.renderFastImage(property_currentItem.property_image)}
             >
                <SafeAreaView style={styles.container(theme)}>
                    <View>
                    {this.renderHeader(theme)}
                    <View style={styles.detailContainer}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.infoContainer}>
                                <View style={styles.propertyInfo(theme)}>
                                    <Text style={styles.pagePropertyTitle(theme)}>{property_currentItem.house_number}</Text>
                                    <Text style={styles.pagePropertyTitle(theme)}>{property_currentItem.building_name}</Text>
                                    <View style={styles.ownerInfo}>
                                        <Text style={styles.textLabel(theme)}>{property_currentItem.tenant_text}</Text>
                                         <TouchableOpacity onPress={()=>this.goToPropertyOwnerDetail(property_currentItem.landlord_id)}><Text style={styles.textValue(theme)}>{property_currentItem.landlord_details[0].landlord_name}</Text></TouchableOpacity>
                                    </View>
                                    <View style={styles.locationWrapp}>
                                        <Image resizeMode={'contain'} style={{width:20,height:20,marginRight:5,marginLeft:-5}} source={require('../../../assets/images/gps_dark.png')}></Image>
                                        <Text style={styles.textLabel(theme)}>
                                            {property_currentItem.location}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.paymentInfo(theme)}>
                                    <View>
                                        <View style={styles.payamountPeriod}>
                                            <Text style={styles.pageTitle(theme)}>{property_currentItem.total_amount_display}</Text>
                                            <Text style={[styles.textLabel(theme),styles.textLabel2(theme),{color:'#878787',paddingTop:5,}]}> {this.renderPayPeriod(property_currentItem.rent_period_id)}</Text>
                                        </View>
                                        <Text style={styles.payTimebld(theme)}>{property_currentItem.rent_due_text} {property_currentItem.rent_date_time}</Text>
                                    </View>
                                    {property_currentItem.property_status =="A"?
                                    <TouchableOpacity onPress={()=>{this.confirmProperty(property_currentItem)}} style={styles.primaryBtn(theme)}>
                                        <Text style={styles.primaryBtnText(theme)}>ACCEPT</Text>
                                    </TouchableOpacity>
                                     :
                                    <TouchableOpacity onPress={()=>this.PayRent(property)} style={styles.primaryBtn(theme)}>
                                        <Text style={styles.primaryBtnText(theme)}>PAY NOW</Text>
                                    </TouchableOpacity>
                                    }
                                </View>

                                <View style={styles.paymentInfo(theme)}>
                                    <View style={styles.bankacInfoXl}>
                                        <Text style={styles.banktitle(theme)}>Bank Details</Text>
                                        <Text style={styles.textLabelXl(theme)}>{property_currentItem.bank_name} ({property_currentItem.bank_account_number})</Text>
                                        <Text style={styles.textLabelXl(theme)}>{property_currentItem.bank_additional_details}</Text>
                                    </View>
                                    <View style={styles.bankacInfo}>
                                        <Text style={styles.banktitle(theme)}>Previous Dues</Text>
                                        <Text style={styles.textLabelXl(theme)}> None</Text>
                                        <Text style={styles.banktitle(theme)}>(This Year)</Text>
                                    </View>
                                </View>

                                <View style={{height:30,width:'100%'}}></View>
                                {/*<Timeline
                                    showTime={false}
                                    circleSize={20}
                                    circleColor={theme.colors.secondry}
                                    innerCircle={'icon'}
                                    lineColor={theme.colors.secondry}
                                    separatorStyle={{backgroundColor:'transparent',height:5,}}
                                    separator={true}
                                    style={{width:'100%',marginLeft:-10}}
                                    titleStyle={[styles.banktitle(theme),{marginTop:-14,marginLeft:0}]}
                                    descriptionStyle={[styles.payTime(theme),{marginTop:0}]}
                                    data={[
                                        {time: '05:34', title: '15 January 2020, 05:34 PM ', description: this.renderInfoTimeline('You paid rent of INR 25000 for this property'), icon: require('../../../assets/images/step-round.png')},
                                        {time: '07:17', title: '15 December 2019, 07:17 PM ', description: this.renderInfoTimeline('You paid rent of INR 25000 for this property'), icon: require('../../../assets/images/step-round.png')},
                                    ]}
                                />*/}
                                <View style={{height:70,width:'100%'}}></View>
                            </View>
                        </ScrollView>
                    </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}


const mapStateToProps = ({ account,properties }) => {
    const {property_currentItem,property_loading} = properties
    const { customer } = account;
    return { property_currentItem,property_loading,customer };
  };
  
  ViewPropertyTenant.propTypes = {
    getPropertyById: PropTypes.func.isRequired,
    property_currentItem: PropTypes.object,
    customer: PropTypes.object,
    property_loading: PropTypes.bool,
    tenantSubmissionOnProperty: PropTypes.func,
};
  
  ViewPropertyTenant.defaultProps = {
    customer: {},
    property_currentItem: {},
    property_loading: false,
  
  };
  
  export default connect(mapStateToProps, {getPropertyById,tenantSubmissionOnProperty})(ViewPropertyTenant);
  