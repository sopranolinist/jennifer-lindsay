import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { CancelIcon, SearchIcon } from '../../images/Icons';

const styles = (theme: Theme) =>
  createStyles({
    searchInput: {
      paddingRight: theme.spacing(0.5)
    }
  });

interface Props extends WithStyles<typeof styles> {
  searchHandler: (e: { target: { value: string } }) => void;
  title: string;
  className?: string;
  id?: string;
}
const SearchInput = ({
  classes,
  searchHandler,
  title,
  className = '',
  id = 'search-input'
}: Props) => {
  const [hasReceivedText, setHasReceivedText] = useState<boolean | ''>(false);
  const textInput: React.RefObject<any> | null = useRef(null);
  const textFieldOnChange: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = e => {
    setHasReceivedText(e.target.value && e.target.value.length > 0);
    searchHandler(e);
  };
  const iconButtonOnChange = () => {
    textInput.current.value = '';
    setHasReceivedText(false);
    searchHandler({ target: { value: '' } });
    textInput.current.focus();
  };

  return (
    <TextField
      id={id}
      variant="outlined"
      placeholder={title}
      inputRef={textInput}
      onChange={textFieldOnChange}
      className={classNames({ [className]: className })}
      inputProps={{
        'aria-label': title,
        'data-testid': id
      }} // eslint-disable-next-line
      InputProps={{
        className: classes.searchInput,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
        ...(hasReceivedText
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Clear Search Term"
                    data-testid={`${id}-clear`}
                    onClick={iconButtonOnChange}
                  >
                    <CancelIcon />
                  </IconButton>
                </InputAdornment>
              )
            }
          : {})
      }}
    />
  );
};
// eslint-disable-next-line

export default withStyles(styles)(SearchInput);
