import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';

const amplifyConfig = {
  Auth: {
    identityPoolId: 'ap-northeast-1:d25bdffa-129d-4670-b710-dc24c2a1f6f9',
    region: 'ap-northeast-1'
  }
}
//Initialize Amplify
Auth.configure(amplifyConfig);

const analyticsConfig = {
  AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: 'b98ae4b4d3c5427f87de4986f77b2a7d',
        // Amazon service region
        region: 'ap-southeast-2',
//        endpointId: 'testtest',
        mandatorySignIn: false
  }
}

Analytics.configure(analyticsConfig)


Analytics.autoTrack('pageView', {
    // REQUIRED, turn on/off the auto tracking
    enable: true,
    // OPTIONAL, the event name, by default is 'pageView'
    eventName: 'pageView',
    // OPTIONAL, the attributes of the event, you can either pass an object or a function 
    // which allows you to define dynamic attributes
    attributes: {
        Address: 'kawabata-shohei@mitsue.co.jp'
    },
    // when using function
    // attributes: () => {
    //    const attr = somewhere();
    //    return {
    //        myAttr: attr
    //    }
    // },
    // OPTIONAL, by default is 'multiPageApp'
    // you need to change it to 'SPA' if your app is a single-page app like React
    type: 'multiPageApp',
    // OPTIONAL, the service provider, by default is the AWS Pinpoint
    provider: 'AWSPinpoint',
    // OPTIONAL, to get the current page url
    getUrl: () => {
        // the default function
        return window.location.origin + window.location.pathname;
    }
});

window.addEventListener('load', () => {
  const $email = document.querySelector('#email')
  $email.value = window.localStorage.getItem('email')

  document.querySelector('#updateButton').addEventListener('click', () => {
    console.log($email.value);
    Analytics.updateEndpoint({
        address: $email.value, // The unique identifier for the recipient. For example, an address could be a device token, email address, or mobile phone number.
        attributes: {
            // Custom attributes that your app reports to Amazon Pinpoint. You can use these attributes as selection criteria when you create a segment.
            hobbies: ['piano', 'hiking']
        //    sendmail: 1
        },
        channelType: 'EMAIL', // The channel type. Valid values: APNS, GCM
        userAttributes: {
            interests: ['football', 'basketball', 'AWS']
            // ...
        }
    }).then(() => {
      window.localStorage.setItem('email', $email.value)
    });
  })
});

