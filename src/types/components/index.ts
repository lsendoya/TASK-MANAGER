import React from 'react';
import { ButtonProps } from '@chakra-ui/react';

export type PropsButton = {
  text: string;
  [key: string]: any;
  style: ButtonProps;
};

export type PropsCard = {
  title: React.ReactElement | string;
  children: React.ReactElement;
};

export type PropsInput = {
  name: string;
  label?: string;
  type?: string;
  [key: string]: any;
};

type TOption = {
  label: string;
  value: string;
};

export type PropsSelect = {
  name: string;
  label?: string;
  register?: any;
  value?: string;
  options: TOption[];
  variant?: string;
};

export type PropsHead = {
  title?: string;
  description?: string;
};

export type PropsImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PropsLoading = {
  isLoading: boolean;
  children?: React.ReactNode;
};

export type PropsMainLayout = {
  children: React.ReactNode;
};
