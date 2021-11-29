import { render } from '@testing-library/react';
import React from 'react';
import {
  AccountCircleIcon,
  CancelIcon,
  CloseIcon,
  DescriptionIcon,
  FirstPageIcon,
  KeyboardArrowDownIcon,
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
  KeyboardArrowUpIcon,
  LastPageIcon,
  LocalLibraryIcon,
  LocalParkingIcon,
  MenuIcon,
  MoreVertIcon,
  OpenInBrowserIcon,
  OpenInNewIcon,
  PermIdentityIcon,
  PollIcon,
  SearchIcon,
  StopIcon,
  WhatsHotIcon
} from './';

describe('Icons', () => {
  test('renders the AccountCircleIcon', async done => {
    const { container } = render(<AccountCircleIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the CancelIcon', async done => {
    const { container } = render(<CancelIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the CloseIcon', async done => {
    const { container } = render(<CloseIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the KeyboardArrowDownIcon', async done => {
    const { container } = render(<KeyboardArrowDownIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the KeyboardArrowLeftIcon', async done => {
    const { container } = render(<KeyboardArrowLeftIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the KeyboardArrowRightIcon', async done => {
    const { container } = render(<KeyboardArrowRightIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the KeyboardArrowUpIcon', async done => {
    const { container } = render(<KeyboardArrowUpIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the MenuIcon', async done => {
    const { container } = render(<MenuIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the MoreVertIcon', async done => {
    const { container } = render(<MoreVertIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the PermIdentityIcon', async done => {
    const { container } = render(<PermIdentityIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the PollIcon', async done => {
    const { container } = render(<PollIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the SearchIcon', async done => {
    const { container } = render(<SearchIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the OpenInBrowserIcon', async done => {
    const { container } = render(<OpenInBrowserIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the OpenInNewIcon', async done => {
    const { container } = render(<OpenInNewIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the DescriptionIcon', async done => {
    const { container } = render(<DescriptionIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the LocalLibraryIcon', async done => {
    const { container } = render(<LocalLibraryIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the LocalParkingIcon', async done => {
    const { container } = render(<LocalParkingIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the WhatsHotIcon', async done => {
    const { container } = render(<WhatsHotIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the StopIcon', async done => {
    const { container } = render(<StopIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the FirstPageIcon', async done => {
    const { container } = render(<FirstPageIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
  test('renders the LastPageIcon', async done => {
    const { container } = render(<LastPageIcon />);
    expect(container).toMatchSnapshot();
    done();
  });
});
