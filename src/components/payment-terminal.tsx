"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function PaymentTerminal() {
  return (
    <div className="w-full overflow-auto flex items-center justify-center">
      <Terminal>
        <TypingAnimation>&gt; Initializing payment gateway...</TypingAnimation>

        <AnimatedSpan className="text-green-500">
          <span>✔ Creating payment token...</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-blue-500">
          <span>ℹ Token: pk_live_51Nvm...</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Payment token created successfully.</span>
        </AnimatedSpan>

        <TypingAnimation>&gt; Processing user checkout...</TypingAnimation>

        <AnimatedSpan className="text-yellow-500">
          <span>ℹ Customer: john.doe@example.com</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-yellow-500">
          <span>ℹ Amount: $149.99</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-yellow-500">
          <span>ℹ Currency: USD</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Payment processed successfully.</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Transaction ID: txn_9876543210</span>
        </AnimatedSpan>

        <AnimatedSpan className="text-green-500">
          <span>✔ Receipt sent to customer email.</span>
        </AnimatedSpan>

        <TypingAnimation className="text-green-500">
          Success! Payment completed.
        </TypingAnimation>

        <TypingAnimation className="text-muted-foreground">
          Redirecting to confirmation page...
        </TypingAnimation>
      </Terminal>
    </div>
  );
}

export default PaymentTerminal;