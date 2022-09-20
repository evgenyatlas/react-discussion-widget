import { useStore } from 'effector-react'
import { $user } from 'entities/user/model'
import React, { HTMLAttributes } from 'react'
import { Avatar, AvatarProps } from 'shared/ui/Avatar'

interface UserAvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
    className?: string
}

export function UserAvatar({ className, ...props }: UserAvatarProps) {
    const user = useStore($user)
    return (
        <Avatar className={className} name={user.name} {...props} />
    )
}