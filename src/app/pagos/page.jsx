"use client"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function HomePage() {
    return (
        <section className="d-flex align-items-center justify-content-center py-4">
            <div className="col-md-6">
                <PayPalScriptProvider options={{                    
                    clientId:
                        "AS9IcB5Azegj02_6ZCMX5AEbFUhzMVDncAEcnjZxGLyuTFN_jAoYRitjnHkG3EjfN8BiPdgoIXKUN6hQ"
                }}>
                    <PayPalButtons
                        style={{
                            color: "blue",
                            layout: "horizontal",
                        }}
                        createOrder={async () => {
                            const res = await fetch('/../api/checkout', {
                                method: "POST"
                            })
                            const order = await res.json()
                            console.log(order)
                            return order.id
                        }}
                        onApprove={(data, actions) => {
                            console.log(data)
                            actions.order.capture()
                        }}
                        onCancel={(data) => {
                            console.log("Cancelled: ",data)
                        }}
                    />
                </PayPalScriptProvider>
            </div>
        </section>
    )
}

export default HomePage