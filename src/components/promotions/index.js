import {MessageText, PromotionsContainer} from "../../styles/promotions";
import {Message} from "@mui/icons-material";
import {Box, Slide} from "@mui/material";
import {useEffect, useState} from "react";


const message = [
    "20% off on your first order",
    "Summer sale start now, visit any store",
    "Please like and subscribe :)"
]


const Promotions = () => {
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true)

    useEffect(() => {
        const internalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % message.length)
            setShow(true)
            setTimeout(() => {
                setShow(false)
            }, 3000)
        }, 4000)

        return () => {
            clearInterval(internalId)
        }
    }, [])

    return (
        <PromotionsContainer>
            <Slide direction={show ? "left" : "right"} in={show}>
                <Box>
                    <MessageText>
                        {message[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>

        </PromotionsContainer>
    )
}

export default Promotions;
