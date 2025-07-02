import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SuccessMessage = styled.div`
  background-color: ${props => props.theme.text === '#ffffff' ? 'rgba(74, 222, 128, 0.2)' : 'rgba(74, 222, 128, 0.8)'};
  color: #166534;
  padding: 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'};
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  margin-top: 0.25rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.primary}40;
  }
`;

const TextArea = styled.textarea`
  margin-top: 0.25rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.primary}40;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #e53e3e;
`;

const SubmitButton = styled.button<{ $isSubmitting: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: ${props => props.theme.primary};
  border: none;
  border-radius: 0.375rem;
  cursor: ${props => props.$isSubmitting ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$isSubmitting ? 0.5 : 1};
  transition: background-color 0.2s, opacity 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.primary === '#3182ce' ? '#2c5282' : '#3182ce'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.background}, 
                0 0 0 4px ${props => props.theme.primary};
  }
`;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {submitSuccess && (
        <SuccessMessage>
          Thank you for your message! I'll get back to you soon.
        </SuccessMessage>
      )}

      <FormGroup>
        <Label htmlFor="name">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <ErrorMessage>
            {errors.name.message}
          </ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <ErrorMessage>
            {errors.email.message}
          </ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="subject">
          Subject
        </Label>
        <Input
          type="text"
          id="subject"
          {...register('subject', { required: 'Subject is required' })}
        />
        {errors.subject && (
          <ErrorMessage>
            {errors.subject.message}
          </ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">
          Message
        </Label>
        <TextArea
          id="message"
          rows={4}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
        />
        {errors.message && (
          <ErrorMessage>
            {errors.message.message}
          </ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          $isSubmitting={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>
      </FormGroup>
    </Form>
  );
};

export default ContactForm; 