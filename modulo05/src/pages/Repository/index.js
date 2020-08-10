/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Loading, Owner, IssueList, Form } from './styles';
import Container from '../../components/Container';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repoName: '',
    repository: {},
    issues: [],
    loading: true,
    issueState: 'all',
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const { issueState } = this.state;
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: issueState,
          per_page: 5,
        },
      }),
    ]);
    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data,
      repoName,
    });
  }

  handleIssueStateChange = async issueState => {
    this.setState({
      loading: true,
      issueState,
    });
    const { repoName } = this.state;
    const issues = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: issueState,
        per_page: 5,
      },
    });
    this.setState({
      loading: false,
      issues: issues.data,
    });
  };

  render() {
    const { repository, issues, loading, issueState } = this.state;
    if (loading) {
      return <Loading>Carregando</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssueList>
          <Form>
            <div>
              <input
                type="radio"
                name="state"
                value="all"
                id="all"
                checked={issueState === 'all'}
                onChange={() => this.handleIssueStateChange('all')}
              />
              <label htmlFor="all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="state"
                value="open"
                id="open"
                checked={issueState === 'open'}
                onChange={() => this.handleIssueStateChange('open')}
              />
              <label htmlFor="open">Open</label>
            </div>
            <div>
              <input
                type="radio"
                name="state"
                value="closed"
                id="closed"
                checked={issueState === 'closed'}
                onChange={() => this.handleIssueStateChange('closed')}
              />
              <label htmlFor="closed">Closed</label>
            </div>
          </Form>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
