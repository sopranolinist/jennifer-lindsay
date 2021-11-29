import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import React, { useRef, useState } from 'react';

const styles = (theme: Theme) =>
  createStyles({
    searchInput: {
      paddingRight: theme.spacing(0.5),
    },
    formControl: {
      width: '100%',
    },
    container: {
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    select: {
      width: '70%',
    },
    button: {
      width: '30%',
    },
  });

interface Props extends WithStyles<typeof styles> {
  filterHandler: (e: { target: { value: string } }) => void;
  title: string;
  values: any[];
  className?: string;
  id?: string;
}
const FilterInput = ({
  classes,
  filterHandler,
  title,
  values,
  className = '',
  id = 'filter-input',
}: Props) => {
  const inputLabel = useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  const [selectValue, setSelectValue] = useState<string>('');
  const textFieldOnChange: React.Dispatch<any> = e => {
    setSelectValue(e.target.value);
    filterHandler(e);
  };

  React.useEffect(() => {
    if (inputLabel.current) {
      setLabelWidth(inputLabel.current.offsetWidth);
    }
  }, []);

  const handleClearFilter = () => {
    filterHandler({ target: { value: '' } });
    setSelectValue('');
  };

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.select}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="filter-select">
            {title}
          </InputLabel>
          <Select
            value={selectValue || ''}
            onChange={textFieldOnChange}
            input={<OutlinedInput labelWidth={labelWidth} />}
            inputProps={{
              name: 'filterSelect',
              id: `filter-select`,
              'aria-label': title,
              'data-testid': id,
            }}
          >
            {values.map(val => (
              <MenuItem key={val} value={val}>
                {val}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item className={classes.button}>
        <Button
          id="clear-filter-button"
          color="primary"
          size="small"
          variant="outlined"
          type="button"
          onClick={handleClearFilter}
        >
          Clear Filter
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(FilterInput);
