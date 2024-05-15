import React from 'react'
import { observer } from 'mobx-react'
import { View } from 'react-native'
import { StarIcon } from 'assets/icons/StarIcon'
import { FoodIcon } from 'icons/FoodIcon'
import { ProfileIcon } from 'icons/ProfileIcon'
import { PoolIcon } from 'icons/PoolIcon'
import { BathTubIcon } from 'icons/BathTubIcon'
import { PinIcon } from 'icons/PinIcon'
import { WifiIcon } from 'icons/WifiIcon'
import { HeartRedIcon } from 'icons/HeartRedIcon'
import { HeartIcon } from 'icons/HeartIcon'
import { HomeIcon } from 'icons/HomeIcon'
import { TicketIcon } from 'icons/TicketIcon'

export const OnboardingScreen = observer(() => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FoodIcon size={24} />
      <ProfileIcon size={24} />
      <PoolIcon size={24} />
      <BathTubIcon size={24} />
      <PinIcon size={24} />
      <WifiIcon size={24} />
      <HeartRedIcon size={24} />
      <HeartIcon size={24} />
      <HomeIcon size={24} />
      <TicketIcon size={24} />
      <StarIcon size={24} />
    </View>
  )
})
