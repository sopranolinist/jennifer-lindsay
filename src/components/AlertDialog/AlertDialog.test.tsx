import { render, waitForElement } from '@testing-library/react';
import React from 'react';
import { authExamples, getFullyWrappedComponent } from '../../helpers/TestHelper';
import AlertDialog from './';

interface Props { }

describe('Component - Footer', () => {

    test('renders the alert dialog component', async done => {
        const { authContextProps, authObjProps } = authExamples.signedInAuthorized;
        const openDialog = true;
        const leftButtonText = 'Left Button';
        const rightButtonText = 'Right Button';
        const leftButtonValue = true;
        const rightButtonValue = false;
        const titleText = 'Alert Dialog Title';
        const contentText = 'Alert Dialog Content';
        const clickHandler = jest.fn();

        const { container, getByText } = render(
            getFullyWrappedComponent(
                <AlertDialog
                    openDialog={openDialog}
                    leftButtonText={leftButtonText}
                    rightButtonText={rightButtonText}
                    leftButtonValue={leftButtonValue}
                    rightButtonValue={rightButtonValue}
                    titleText={titleText}
                    contentText={contentText}
                    clickHandler={clickHandler}
                />, { authContextProps, authObjProps })
        );

        const DialogTitle = await waitForElement(
            () => getByText(titleText)
        );
        const DialogLeftButton = await waitForElement(
            () => getByText(leftButtonText)
        );
        expect(DialogTitle).toBeInTheDocument();
        expect(DialogLeftButton).toBeInTheDocument();
        expect(container).toMatchSnapshot();
        done();
    });
});
