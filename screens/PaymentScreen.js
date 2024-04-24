import { StripeProvider } from '@stripe/stripe-react-native';

export default function PaymentScreen() {
    return(
        <StripeProvider
            publishableKey='pk_test_51P86ybIBumKK1lITKwGa1yXh7L8phlQRgRHVu5gc1ye0eh2EqPk4tUQOOrnfTztp9lL3bn6zX80RLZZJ895B0UxQ003jeqEde2'
            urlScheme=''
            merchantIdentifier='merchant.com.zamaninternational'>
            //my app code here
        </StripeProvider>
    );
}