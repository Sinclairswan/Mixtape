class SpotClient
  attr_reader :client

  def initialize(access_token)

    @config = {
  :access_token => access_token
  # "BQDFu0pOC9bavAMNxdzGbaAQs44mZnO9_0mH-8t4ciCNz4M0W8F5IZd73hsz0rv6UUCV8ooKIcO2avyE2NnsaeU96OJF4GWbWx5algvvuW0AJJ0_46hau5R3VWyi7PTB_cyxwXOToiPUX9fyKKGMMjw5Ds3M_Z9h0G__9niiDg6aV4-jr_o",  # initialize the client with an access token to perform authenticated calls
  :raise_errors => true,  # choose between returning false or raising a proper exception when API calls fails

  # Connection properties
  :retries       => 0,    # automatically retry a certain number of times before returning
  :read_timeout  => 10,   # set longer read_timeout, default is 10 seconds
  :write_timeout => 10,   # set longer write_timeout, default is 10 seconds
  :persistent    => false # when true, make multiple requests calls using a single persistent connection. Use +close_connection+ method on the client to manually clean up sockets}
}
@client ||= getClient
end

def getClient
  client = Spotify::Client.new(@config)
end





end
