/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state */
import React from 'react'
import PropTypes from 'prop-types'
import DefaultSelect from 'part:@sanity/components/selects/default'
import filters from './filters.svg'
import styles from './ColorblindPreview.css'

const FILTER_ITEMS = [
  {title: 'Protanopia (red/green)', value: 'protanopia'},
  {title: 'Deuteranopia (green/red)', value: 'deuteranopia'},
  {title: 'Tritanopia (blue/yellow)', value: 'tritanopia'},
  {title: 'Achromatopsia (greyscale)', value: 'achromatopsia'},
  {title: 'Protanomaly (red/green)', value: 'protanomaly'},
  {title: 'Deuteranomaly (green/red)', value: 'deuteranomaly'},
  {title: 'Tritanomaly (blue/yellow)', value: 'tritanomaly'},
  {title: 'Achromatomaly (greyscale)', value: 'achromatomaly'},
  {title: 'No filter', value: ''}
]

class ColorblindPreview extends React.PureComponent {
  static propTypes = {
    url: PropTypes.string // eslint-disable-line react/forbid-prop-types
  }

  static defaultProps = {
    url: ''
  }

  state = {
    activeFilter: FILTER_ITEMS[0]
  }

  handleFilterChange = filter => {
    this.setState({activeFilter: filter})
  }

  render() {
    const {url} = this.props
    return (
      <div className={styles.componentWrapper}>
        <div className={styles.filterDropdown}>
          <label className={styles.dropdownLabel} htmlFor="select-filter">
            Select a filter:
          </label>
          <DefaultSelect
            id="select-filter"
            items={FILTER_ITEMS}
            value={this.state.activeFilter}
            onChange={value => this.handleFilterChange(value)}
          />
        </div>
        <div
          className={styles.iframeContainer}
          style={{filter: `url('${filters}#${this.state.activeFilter.value}')`}}
        >
          <iframe src={url} frameBorder="0" />
        </div>
      </div>
    )
  }
}

export default ColorblindPreview
