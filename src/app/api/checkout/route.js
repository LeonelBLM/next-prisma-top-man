import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server'

const clientId = "AS9IcB5Azegj02_6ZCMX5AEbFUhzMVDncAEcnjZxGLyuTFN_jAoYRitjnHkG3EjfN8BiPdgoIXKUN6hQ"
const clientSecret = "EHpRHVWVauqGhcinlycOdQp18dGx49GdJBgjE557nTKxD61BBZ35Jl8si0F_Lig5G4Za3W2KmPVVoNMB"

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)
const client = new paypal.core.PayPalHttpClient(environment)

export async function POST() {

    const request = new paypal.orders.OrdersCreateRequest()
    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "100.00",
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: "100.00",
                        }   
                    }
                },
                items: [
                    {
                        name: "book of react",
                        description: "a book from react",
                        quantity: '1',
                        unit_amount: {
                            currency_code: "USD",
                            value: "50.00",
                        }
                    },
                    {
                        name: "book of next",
                        description: "a book from nexxtjs",
                        quantity: "1",
                        unit_amount: {
                            currency_code: "USD",
                            value: "50.00",
                        }
                    }
                ]
            }
        ]
    })

    const response = await client.execute(request)
    console.log(response)


    return NextResponse.json({
        id: response.result.id
    })
}