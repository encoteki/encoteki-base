import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-[300px] bg-red-200">
      <AccordionItem value="item-1">
        <AccordionTrigger>Connect Wallet</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col">
            <p>Connect your wallet to start using the app.</p>
            <p>Connect your wallet to start using the app.</p>
            <p>Connect your wallet to start using the app.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
