import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      productName,
      price,
      quantity,
      totalAmount,
      productUrl,
      items,
      estimatedTotal,
      customerName,
      customerPhone,
    } = body;

    const businessNumber = process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || "919952820016";

    let formattedMessage = "";

    if (productName) {
      formattedMessage = `
🚨 *AUTOMATED PRODUCT ENQUIRY* 🚨

🧼 *Product:* ${productName}
💰 *Unit Price:* ₹${price}
📦 *Quantity:* ${quantity}
💵 *Total Amount:* ₹${totalAmount}
🔗 *Product Link:* ${productUrl || "N/A"}
${customerName ? `👤 *Customer Name:* ${customerName}\n` : ""}${customerPhone ? `📞 *Customer Phone:* ${customerPhone}\n` : ""}
      `.trim();
    } else if (items && items.length > 0) {
      formattedMessage = `
🚨 *AUTOMATED WISHLIST ENQUIRY* 🚨

${items
  .map(
    (item: any, idx: number) =>
      `${idx + 1}. *${item.product.name}*\n   Qty: ${item.quantity} | Unit Price: ₹${item.product.price} | Subtotal: ₹${item.product.price * item.quantity}`
  )
  .join("\n")}

💵 *Estimated Total:* ₹${estimatedTotal}
${customerName ? `👤 *Customer Name:* ${customerName}\n` : ""}${customerPhone ? `📞 *Customer Phone:* ${customerPhone}\n` : ""}
      `.trim();
    } else {
      formattedMessage = `
🚨 *AUTOMATED GENERAL ENQUIRY* 🚨
Customer requested skincare consultation.
      `.trim();
    }

    console.log(`[AUTOMATED ENQUIRY TO ${businessNumber}]:`, formattedMessage);

    // If Meta WhatsApp Cloud API is configured in environment variables:
    if (process.env.WHATSAPP_CLOUD_API_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID) {
      const response = await fetch(
        `https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.WHATSAPP_CLOUD_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: businessNumber,
            type: "text",
            text: { body: formattedMessage },
          }),
        }
      );
      const data = await response.json();
      console.log("WhatsApp Cloud API Response:", data);
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted automatically to business number " + businessNumber,
      details: formattedMessage,
    });
  } catch (error: any) {
    console.error("Error sending automated enquiry:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
