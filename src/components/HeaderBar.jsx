import React from "react";
import {ChakraProvider, Box, Flex, Text} from "@chakra-ui/react";

const HeaderBar = () => {

    return (
        <div style = {{position: "fixed", zIndex: 2}}>
            <ChakraProvider>
                <Flex container flexWrap = "space-between" w = "100%" bg = "transparent" p = "10" opacity= "1">
                    <Box>
                        <Text fontSize = "3xl" color = "#fff"> React Three App </Text>
                    </Box>
                </Flex>
            </ChakraProvider>
        </div>
    )
}

export default HeaderBar;