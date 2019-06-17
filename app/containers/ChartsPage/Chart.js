import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'c3/c3.css';
import C3Chart from 'react-c3js';
import {
  EU_ELECTION_DATE_BY_COUNTRY,
  DEFAULT_EU_ELECTION_DATE,
} from './constants';
import { numberWithSpaces } from '../App/utils';

const graphOptions = (i18nMessages, locale, country = 'FR') => ({
  axis: {
    x: {
      type: 'timeseries',
      tick: {
        format(value) {
          return new Date(value).toLocaleDateString(locale, {
            month: 'short',
            day: 'numeric',
          });
        },
      },
    },
    y: {
      label: {
        text: i18nMessages['app.containers.ChartsPage.yLabel'],
        position: 'outer-middle',
      },
      tick: {
        format(value) {
          return value / 1000;
        },
      },
    },
  },
  point: {
    r: 3,
    focus: {
      expand: {
        r: 5,
      },
    },
  },
  line: {
    connectNull: true,
  },
  tooltip: {
    format: {
      title: value =>
        new Date(value).toLocaleDateString(locale, {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      value: value =>
        `${numberWithSpaces(value)} ${
          i18nMessages['app.containers.ChartsPage.ads']
        }`,
    },
  },
  grid: {
    y: {
      show: true,
      class: 'grid800',
    },
    x: {
      lines: [
        {
          value:
            EU_ELECTION_DATE_BY_COUNTRY[country.toUpperCase()] ||
            DEFAULT_EU_ELECTION_DATE,
          text: i18nMessages['app.containers.ChartsPage.elections'],
          position: 'start',
          class: 'electionsLine',
        },
      ],
    },
  },
});

const ChartStyles = styled.div`
  .c3-line {
    stroke-width: 2px;
  }

  .electionsLine {
    text {
      fill: #950952;
      font-weight: 600;
    }

    line {
      stroke: rgba(149, 9, 82, 0.5) !important;
    }
  }

  .c3-grid {
    line {
      stroke: rgba(0, 0, 0, 0.075);
    }
  }

  .c3-tooltip {
    box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
      0 1px 3px 1px rgba(60, 64, 67, 0.16);
    opacity: 1;
    border-radius: 2px;

    tr {
      border: none;
    }

    tr:first-child {
      &,
      th {
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
      }

      th {
        background: rgba(56, 65, 94, 0.9);
        text-align: center;
        text-transform: capitalize;
        font-weight: normal;
      }
    }

    tr:last-child {
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;

      td:first-child {
        border-bottom-left-radius: 2px;
      }

      td:last-child {
        border-bottom-right-radius: 2px;
      }
    }

    tr:not(:first-child) {
      border-top: 1px solid #eee;
    }

    tr:first-child + tr {
      border-top: none;
    }

    td:first-child {
      border-left: none;
      border-right: 1px solid #eee;
    }

    td:last-child {
      font-weight: bold;
    }
  }
`;

function Chart({ data, messages, locale, country, size }) {
  return (
    <ChartStyles>
      <C3Chart
        data={data}
        size={size}
        {...graphOptions(messages, locale, country)}
      />
    </ChartStyles>
  );
}

Chart.propTypes = {
  data: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
};

export default memo(Chart);
