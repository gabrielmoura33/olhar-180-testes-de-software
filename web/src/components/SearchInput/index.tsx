import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react'
import { FieldError } from 'react-hook-form'
import { GrSearch } from 'react-icons/gr'
import {
  BeforeButton,
  InputContainer,
  InputWrapper,
  InvalidMessage,
} from './search-input.module'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  type?: string
  error?: FieldError | undefined
}

const SearchInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  SearchInputProps
> = ({ placeholder, type = 'text', error, ...rest }, ref) => {
  const [isActive, setIsActive] = useState(false)

  if (!isActive) {
    return (
      <BeforeButton onClick={() => setIsActive(true)}>
        <GrSearch size={20} fill="#FFFFF"></GrSearch>
      </BeforeButton>
    )
  }

  return (
    <InputWrapper>
      <InputContainer
        ref={ref}
        type={type}
        placeholder={placeholder}
        onBlur={() => setIsActive(false)}
        {...rest}
      />
      {!!error && <InvalidMessage>{error.message}</InvalidMessage>}
    </InputWrapper>
  )
}

const SearchInput = forwardRef(SearchInputBase)

export default SearchInput
