import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
} from "@chakra-ui/react";
import { BiMinus } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";

const Faq = ({ title }: { title: string }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem py={2}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _focus={{ outline: "none" }}>
                <Box flex="1" textAlign="left">
                  {title}
                </Box>
                {isExpanded ? <Icon as={BiMinus} /> : <Icon as={FiPlus} />}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
