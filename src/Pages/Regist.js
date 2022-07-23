import { Box, Heading, Flex, Text, VStack, FormControl, Input, Button, Select } from '@chakra-ui/react'
import { ArrowBackIcon } from "@chakra-ui/icons"
import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


export default function Regist() {

    const navigate = useNavigate()
    function clickBack() {
        navigate('/')
    }

    const [formInfo, setFormInfo] = React.useState({
        name: "",
        number_of_members: null,
        released_work: "",
        music_since: "",
        city: "",
        travelling_capacity: "",
        name1: "",
        phone1: null,
        name2: "",
        phone2: null,
        name3: "",
        phone3: null,
        email_address: "",
        social_link: ""
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormInfo(prevFormInfo => {
            return {
                ...prevFormInfo,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios({
            method: 'POST',
            url: 'some/api',
            data: formInfo
        })
            .then(function (response) {
                alert("Registered Successfully!")
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                alert("There has been an error, please try again.!")
            });
    }
    return (
        <Box bg="url(../Images/registBg.jpg)" bgPosition="center" bgSize="cover" bgColor="#181818" h="100vh" w="100vw">
            <Flex marginInline="6rem" justifyContent="space-between" alignItems="center">
                <Box _hover={{ 'bgColor': '#99361F' }} transition="0.3s all" cursor="pointer" onClick={clickBack} transform="translateY(10px)" p="0.6rem 1rem" color="#B9B9B9" bgColor="#E04F2E"><ArrowBackIcon w="1.6rem" h="1.6rem" /></Box>
                <Heading pt="2rem" textAlign="center" fontSize="5rem" letterSpacing="0.2rem" color="#E04F2E">RegistratioN</Heading>
                <Text></Text>
            </Flex>
            <Flex fontFamily="Hermona" color="#B9B9B9" w="90vw" marginInline="auto" justifyContent="space-around">
                <Box fontSize="3rem" color="#E04F2E" display="inline">Band <Text display="inline" color="#B9B9B9"  >Info</Text></Box>
                <Box fontSize="3rem" color="#E04F2E" display="inline">Contact <Text display="inline" color="#B9B9B9" >Info</Text></Box>
            </Flex>
            <Flex>
                <VStack ml="12rem" color="#B9B9B9" borderRight="3px solid #E04F2E" w="40%" >
                    <FormControl>
                        <Input borderRadius="0" mt="2rem" required color="#B9B9B9 !important" bgColor="#181818" id="name" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="BAND NAME" name="name" type="text" value={formInfo.name} />
                        <Input borderRadius="0" mt="3rem" required color="#B9B9B9 !important" bgColor="#181818" id="number_of_members" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="NUMBER OF MEMBERS" name="number_of_members" type="number" value={formInfo.number_of_members} />
                        <Input borderRadius="0" mt="3rem" required color="#B9B9B9 !important" bgColor="#181818" id="released_work" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="DRIVE/SPOTIFY LINK OF MUSIC CREATED" name="released_work" type="text" value={formInfo.released_work} />
                        <Input borderRadius="0" mt="3rem" required color="#B9B9B9 !important" bgColor="#181818" id="name" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="YEAR OF INCEPTION OF BAND" name="music_since" type="number" value={formInfo.music_since} />
                        <Input borderRadius="0" mt="3rem" required color="#B9B9B9 !important" bgColor="#181818" id="city" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="CITY YOU ARE BASED IN" name="city" type="text" value={formInfo.city} />
                        <Select borderRadius="0" mt="3rem" required color="#B9B9B9 !important" bgColor="#181818" id="travelling_capacity" border="1px solid #575757 !important" onChange={handleChange}  w="90%" placeholder="VENUE YOU CAN CONTEST IN" name="travelling_capacity" value={formInfo.travelling_capacity} mb="2rem">
                        <option value='delhi'>DELHI</option>
                        <option value='bangalore'>BANGALORE</option>
                        <option value='chennai'>CHENNAI</option>
                        <option value='mumbai'>MUMBAI</option>
                        <option value='kolkata'>KOLKATA</option>
                        <option value='guwahati'>GUWAHATI</option>
                        <option value='none'>NONE</option>
                        </Select>
                    </FormControl>
                </VStack>
                <VStack ml="8rem" color="#B9B9B9" w="40%">
                    <FormControl>
                        <Text fontSize="1.2rem" ml="-3rem" color="#E04F2E">CONTACT 1:</Text>
                        <Input borderRadius="0" mt="0.5rem" required color="#B9B9B9 !important" bgColor="#181818" id="name1" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="NAME OF CONTACT" name="name1" type="text" value={formInfo.name1} />
                        <Input borderRadius="0" mt="0.5rem" required color="#B9B9B9 !important" bgColor="#181818" id="phone1" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="PHONE NUMBER" name="phone1" type="number" value={formInfo.phone1} />
                        <Text mt="2rem" fontSize="1.2rem" ml="-3rem" color="#E04F2E">CONTACT 2:</Text>
                        <Input borderRadius="0" mt="0.5rem" required color="#B9B9B9 !important" bgColor="#181818" id="name2" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="NAME OF CONTACT" name="name2" type="text" value={formInfo.name2} />
                        <Input borderRadius="0" mt="0.5rem" required color="#B9B9B9 !important" bgColor="#181818" id="phone2" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="PHONE NUMBER" name="phone2" type="number" value={formInfo.phone2} />
                        <Text mt="2rem" fontSize="1.2rem" ml="-3rem" color="#E04F2E">CONTACT 3 (IF ANY):</Text>
                        <Input borderRadius="0" mt="0.5rem" color="#B9B9B9 !important" bgColor="#181818" id="name3" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="NAME OF CONTACT" name="name3" type="text" value={formInfo.name3} />
                        <Input borderRadius="0" mt="0.5rem" color="#B9B9B9 !important" bgColor="#181818" id="phone3" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="PHONE NUMBER" name="phone3" type="number" value={formInfo.phone3} />
                        <Input borderRadius="0" mt="2rem" color="#B9B9B9 !important" bgColor="#181818" id="email_address" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="YOUR EMAIL ADDRESS" name="email_address" type="email" value={formInfo.email_address} />
                        <Input borderRadius="0" mt="0.5rem" color="#B9B9B9 !important" bgColor="#181818" id="social_link" border="1px solid #575757 !important" onChange={handleChange} p="1.2rem" w="90%" placeholder="LINK TO SOCIAL MEDIA ACCOUNT (IF ANY)" name="social_link" type="text" value={formInfo.social_link} />
                    </FormControl>
                </VStack>
            </Flex>
            <Flex justifyContent="center" mt="2rem" w="100vw"><Button onClick={handleSubmit} _hover={{ 'bgColor': '#99361F' }} fontFamily="Hermona" color="white" bgColor="#E04F2E" padding="2.2rem 3.6rem" fontSize="3rem" fontWeight="400" borderRadius={0}>REGISTER</Button></Flex>
        </Box >
    )
}