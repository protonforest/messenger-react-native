import { StripeProvider } from '@stripe/stripe-react-native';
import { useStripe } from '@stripe/stripe-react-native';
import { Text, TextInput, Button, View, Image, StyleSheet, StatusBar } from 'react-native';

export default function PaymentScreen({ navigation }) {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    
    const initializePaymentSheet = async () => {
        returnURL: 'zamaninternational://stripe-redirect';
        
        const { error } = await initPaymentSheet({
            merchantDisplayName: "Zaman International",
            intentConfiguration: {
                mode: {
                    amount: 1099,
                    currencyCode: 'USD',
                },
                confirmHandler: confirmHandler
            }
        });
        if (error) {
            // handle error
        }
    };

  const didTapCheckoutButton = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      if (error.code === PaymentSheetError.Canceled) {
        // Customer canceled - you should probably do nothing.
      } else {
        // PaymentSheet encountered an unrecoverable error. You can display the error to the user, log it, etc.
      }
    } else {
        navigation.navigate("Confirmation")

    }
  }

  const confirmHandler = async (paymentMethod, shouldSavePaymentMethod, intentCreationCallback) => {
    const requestOptions = {
        method: 'POST',
        headers : { 'Content-Type': 'application/json'},
        body: JSON.stringify({ app: 'Zaman International React App'})
    };

    // Make a request to your own server.
    const myServerResponse = await fetch("https://husseinkaraki.com/backend/zamaninternational/payment/intentcreation", requestOptions);
    
    const { clientSecret, error } = await response.json();
    
    // Call the `intentCreationCallback` with your server response's client secret or error
    if (clientSecret) {
      intentCreationCallback({clientSecret})
    } else {
        //TODO: Alternative logging. 
        intentCreationCallback({error})
    }
  }

    return(
        <StripeProvider
            publishableKey='pk_test_51P86ybIBumKK1lITKwGa1yXh7L8phlQRgRHVu5gc1ye0eh2EqPk4tUQOOrnfTztp9lL3bn6zX80RLZZJ895B0UxQ003jeqEde2'
            urlScheme='zamaninternational://stripe-redirect'
            merchantIdentifier='merchant.com.protonforest.zamaninternational'>
            <Button
                title="Checkout"
                color="#f194ff"
                onPress= {() => didTapCheckoutButton()} />
        </StripeProvider>


    );
}